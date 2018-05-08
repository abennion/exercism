package letter

func f1(s string, c chan FreqMap) {
	c <- Frequency(s)
}

// ConcurrentFrequency ...
func ConcurrentFrequency(ss []string) FreqMap {
<<<<<<< HEAD
	c := make(chan FreqMap)

	for _, s := range ss {
		go f1(s, c)
	}

	res := FreqMap{}

	for {
		fm := <-c
		for k, v := range fm {
			res[k] += v
		}
||||||| merged common ancestors
	out := make(chan FreqMap)
	for _, s := range ss {
		go func() {
			out <- Frequency(s)
		}()
	}
	for _, m := range out {

=======
	c := make(chan FreqMap)
	go func() {
		for _, s := range ss {
			c <- Frequency(s)
		}
		close(c)
	}()
	res := FreqMap{}
	for fm := range c {
		for k, v := range fm {
			res[k] += v
		}
>>>>>>> c30bacfb0c77b838e1601f2534428d4468b69274
	}
<<<<<<< HEAD

	return res
||||||| merged common ancestors
=======
	return res
>>>>>>> c30bacfb0c77b838e1601f2534428d4468b69274
}
