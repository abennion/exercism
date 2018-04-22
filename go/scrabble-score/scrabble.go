// Package scrabble does stuff
package scrabble

import (
	"strings"
)

// Score does a thing
func Score(input string) int {
	input = strings.ToLower(input)

	// perhaps not idiomatic, but why not?
	score := func(input string) int {
		switch input {
		case "a":
			return 1
		case "e":
			return 1
		case "i":
			return 1
		case "o":
			return 1
		case "u":
			return 1
		case "l":
			return 1
		case "n":
			return 1
		case "r":
			return 1
		case "s":
			return 1
		case "t":
			return 1
		case "d":
			return 2
		case "g":
			return 2
		case "b":
			return 3
		case "c":
			return 3
		case "m":
			return 3
		case "p":
			return 3
		case "f":
			return 4
		case "h":
			return 4
		case "v":
			return 4
		case "w":
			return 4
		case "y":
			return 4
		case "k":
			return 5
		case "j":
			return 8
		case "x":
			return 8
		case "q":
			return 10
		case "z":
			return 10
		default:
			return 0
		}
	}
	res := 0
	for _, c := range input {
		res += score(string(c))
	}
	return res
}
