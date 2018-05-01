package clock

import "fmt"

// Clock represents a time without dates.
type Clock struct {
	hour   int
	minute int
}

// New returns a new Clock.
func New(h, m int) Clock {
	return Clock{h, m}.Add(0)
}

// String returns the Clock's time as a string.
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hour, c.minute)
}

// Add adds minutes to a Clock.
func (c Clock) Add(minutes int) Clock {
	c.minute += minutes
	for c.minute < 0 {
		c.hour--
		c.minute += 60
	}
	for c.minute >= 60 {
		c.hour++
		c.minute -= 60
	}
	for c.hour < 0 {
		c.hour += 24
	}
	for c.hour >= 24 {
		c.hour -= 24
	}
	return c
}

// Subtract subtracts minutes from a Clock.
func (c Clock) Subtract(minutes int) Clock {
	return c.Add(-minutes)
}
