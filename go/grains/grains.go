package grains

import (
	"fmt"
	"math"
)

// Square ....
func Square(x int) (uint64, error) {
	if x < 1 || x > 64 {
		return uint64(0), fmt.Errorf("nope")
	}
	return uint64(math.Pow(2, float64(x-1))), nil
}

// Total ...
func Total() uint64 {
	t, _ := Square(64)
	return t*2 - 1
}
