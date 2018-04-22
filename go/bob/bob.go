package bob

import (
	"regexp"
	"strings"
)

func Hey(remark string) string {
	remark = strings.TrimSpace(remark)
	hasLetters, _ := regexp.MatchString("[a-zA-Z]", remark)
	switch {
	case remark == "":
		return "Fine. Be that way!"
	case remark[len(remark)-1:] == "?" && strings.ToUpper(remark) == remark && hasLetters:
		return "Calm down, I know what I'm doing!"
	case remark[len(remark)-1:] == "?":
		return "Sure."
	case strings.ToUpper(remark) == remark && hasLetters:
		return "Whoa, chill out!"
	default:
		return "Whatever."
	}
}
