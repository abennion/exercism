// Package raindrops does a thing
package raindrops

import "fmt"

// Convert does a thing
func Convert(input int) string {
	res := ""
	if input%3 == 0 {
		res += "Pling"
	}
	if input%5 == 0 {
		res += "Plang"
	}
	if input%7 == 0 {
		res += "Plong"
	}
	if res != "" {
		return res
	}
	return fmt.Sprintf("%d", input)
}
