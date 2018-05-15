package flatten

import (
	"fmt"
	"reflect"
)

func Flatten(input interface{}) []interface{} {
	s := reflect.ValueOf(input)
	fmt.Println(s)
	if s.Kind() != reflect.Slice {
		return []interface{}{s}
	}
	res := []interface{}
	for i := 0; i < len(s); i++ {
		res = append(res, nil)
		f = Flatten(s[i])
		// append that to res

	}
	return resd
}
