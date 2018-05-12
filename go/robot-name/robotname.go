package robotname

import (
	"math/rand"
	"time"
)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "0123456789"

var seededRand = rand.New(rand.NewSource(time.Now().UnixNano()))

// StringWithCharset returns a string of length from the given charset
func StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}

// Robot type
type Robot struct {
	name  string
	names map[string]struct{}
}

// Name returns the Robot's name
func (r *Robot) Name() string {
	if r.names == nil {
		r.names = make(map[string]struct{})
	}
	if r.name == "" {
		for {
			name := StringWithCharset(2, letters) + StringWithCharset(3, numbers)
			if _, ok := r.names[name]; !ok {
				r.name = name
				r.names[name] = struct{}{}
				break
			}
		}
	}
	return r.name
}

// Reset the Robot's name
func (r *Robot) Reset() {
	r.name = ""
}
