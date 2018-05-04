package letter

// ConcurrentFrequency ...
func ConcurrentFrequency(ss []string) FreqMap {
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
	}
	return res
}
