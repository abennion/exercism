package erratum

// Use uses the resource returned by the value of type Opener.
func Use(opener ResourceOpener, input string) (err error) {
	res, err := opener()
	if err != nil {
		if _, ok := err.(TransientError); ok {
			return Use(opener, input)
		}
		return err
	}
	defer res.Close()
	defer func() {
		if r := recover(); r != nil {
			if ferr, ok := r.(FrobError); ok {
				res.Defrob(ferr.defrobTag)
			}
			err = r.(error)
		}
	}()
	res.Frob(input)
	return
}
