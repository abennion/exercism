package letter

func f1(s string, c chan FreqMap) {
	c <- Frequency(s)
}

// ConcurrentFrequency ...
func ConcurrentFrequency(ss []string) FreqMap {
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
	}

	return res
}
