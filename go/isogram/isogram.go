package isogram

import (
	"strings"
	"unicode"
)

// IsIsogram determines if a word or a phrase is an isogram.
func IsIsogram(input string) bool {
	charCount := make(map[rune]int)
	for _, char := range strings.ToLower(input) {
		if unicode.IsLetter(char) {
			if charCount[char] > 0 {
				return false
			}
			charCount[char]++
		}
	}
	return true
}
