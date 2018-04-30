package clock

import (
	"fmt"
)

// Clock ...
type Clock struct {
	hour   int
	minute int
}

// New ...
func New(h, m int) Clock {
	return Clock{h, m}
}

// String ...
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hour, c.minute)
}

// Add ...
func (c Clock) Add(minutes int) Clock {
	c.minute += minutes
	return c
}

// Subtract ...
func (c Clock) Subtract(minutes int) Clock {
	// TODO -60 goes back an hour
	c.minute -= minutes
	return c
}
