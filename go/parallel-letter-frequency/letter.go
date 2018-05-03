package letter

// ConcurrentFrequency ...
func ConcurrentFrequency(ss []string) FreqMap {
	out := make(chan FreqMap)
	for _, s := range ss {
		go func() {
			out <- Frequency(s)
		}()
	}
	for _, m := range out {

	}
}
