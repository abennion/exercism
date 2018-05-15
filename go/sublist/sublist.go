package sublist

import (
	"reflect"
)

// Relation describes the relationship between two slices.
type Relation string

// Sublist determines the relationship between two slices of ints.
func Sublist(a, b []int) Relation {
	switch {
	case len(a) == len(b):
		if reflect.DeepEqual(a, b) {
			return "equal"
		}
		return "unequal"
	case len(a) < len(b):
		for i := 0; i < len(b)-len(a)+1; i++ {
			if reflect.DeepEqual(a, b[i:i+len(a)]) {
				return "sublist"
			}
		}
	default:
		rel := Sublist(b, a)
		if rel == "sublist" {
			return "superlist"
		}
		return rel
	}
	return "unequal"
}
