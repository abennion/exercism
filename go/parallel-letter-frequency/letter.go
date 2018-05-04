package letter

// FrequencyProducer ...
func FrequencyProducer(ss []string, c chan FreqMap) {
	for _, s := range ss {
		c <- Frequency(s)
	}
	close(c)
}

// ConcurrentFrequency ...
func ConcurrentFrequency(ss []string) FreqMap {
	c := make(chan FreqMap)
	res := FreqMap{}
	go FrequencyProducer(ss, c)
	for fm := range c {
		for k, v := range fm {
			res[k] += v
		}
	}
	return res
}
