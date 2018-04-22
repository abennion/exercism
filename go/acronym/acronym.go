package acronym

import (
	"regexp"
	"strings"
)

func Abbreviate(s string) string {
	res := ""
	for _, part := range regexp.MustCompile("[ -]").Split(s, -1) {
		res += strings.ToUpper(part[:1])
	}
	return res
}
