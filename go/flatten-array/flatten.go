package flatten

import (
	"reflect"
)

// Flatten flattens a list.
//
// This one made me go and start reading The Go Programming Language.
func Flatten(input interface{}) []interface{} {
	res := []interface{}{}
	switch v := reflect.ValueOf(input); v.Kind() {
	case reflect.Slice:
		for i := 0; i < v.Len(); i++ {
			res = append(res, Flatten(v.Index(i).Interface())...)
		}
	case reflect.Int:
		res = append(res, input)
	}
	return res
}
