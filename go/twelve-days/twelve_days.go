package twelve

import (
	"bytes"
	"fmt"
)

// Day contains a day's name and gift description.
type Day struct {
	Name string
	Gift string
}

var days = map[int]*Day{
	1:  &Day{Name: "first", Gift: "a Partridge in a Pear Tree"},
	2:  &Day{Name: "second", Gift: "two Turtle Doves"},
	3:  &Day{Name: "third", Gift: "three French Hens"},
	4:  &Day{Name: "fourth", Gift: "four Calling Birds"},
	5:  &Day{Name: "fifth", Gift: "five Gold Rings"},
	6:  &Day{Name: "sixth", Gift: "six Geese-a-Laying"},
	7:  &Day{Name: "seventh", Gift: "seven Swans-a-Swimming"},
	8:  &Day{Name: "eighth", Gift: "eight Maids-a-Milking"},
	9:  &Day{Name: "ninth", Gift: "nine Ladies Dancing"},
	10: &Day{Name: "tenth", Gift: "ten Lords-a-Leaping"},
	11: &Day{Name: "eleventh", Gift: "eleven Pipers Piping"},
	12: &Day{Name: "twelfth", Gift: "twelve Drummers Drumming"},
}

// Verse returns a verse for the given day by integer value.
func Verse(num int) string {
	var buf bytes.Buffer
	buf.WriteString(fmt.Sprintf("On the %v day of Christmas my true love gave to me", days[num].Name))
	for i := num; i >= 1; i-- {
		buf.WriteString(",")
		if num > 1 && i == 1 {
			buf.WriteString(" and")
		}
		buf.WriteString(" ")
		buf.WriteString(days[i].Gift)
	}
	buf.WriteString(".")
	return buf.String()
}

// Song returns all the verses.
func Song() string {
	var buf bytes.Buffer
	for i := 1; i <= 12; i++ {
		buf.WriteString(Verse(i))
		buf.WriteString("\n")
	}
	return buf.String()
}
