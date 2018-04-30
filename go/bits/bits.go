package bits

import "fmt"

// Bits ...
func Bits() bool {
	x := uint64(1)
	fmt.Println("x", 1<<x)
	return true
}
