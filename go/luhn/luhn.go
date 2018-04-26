package luhn

import (
	"strings"
	"unicode"
)

// Reverse a slice of runes
func Reverse(runes []rune) []rune {
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return runes
}

// Valid validates a variety of identification numbers
func Valid(s string) bool {
	s = strings.Replace(s, " ", "", -1)
	if len(s) <= 1 {
		return false
	}
	runes := Reverse([]rune(s))
	sum := 0
	for i := 0; i < len(runes); i++ {
		if !unicode.IsNumber(runes[i]) {
			return false
		}
		x := (i%2 + 1) * int(runes[i]-'0')
		if x > 9 {
			x -= 9
		}
		sum += x
	}
	return sum%10 == 0
}
