package reverse

import "bytes"

// String reverses a string.
func String(s string) string {
	runes := []rune(s)
	var buffer bytes.Buffer
	for i := len(runes) - 1; i >= 0; i-- {
		buffer.WriteRune(runes[i])
	}
	return buffer.String()
}
