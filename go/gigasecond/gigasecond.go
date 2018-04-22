package gigasecond

import (
	"math"
	"time"
)

// AddGigasecond adds a gigasecond to the parameter value
func AddGigasecond(t time.Time) time.Time {
	t = t.Add(time.Second * time.Duration(math.Pow10(9)))
	return t
}
