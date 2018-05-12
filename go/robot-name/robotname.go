package robotname

import (
	"math/rand"
	"time"
)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "0123456789"

var seededRand = rand.New(rand.NewSource(time.Now().UnixNano()))

// Robot type
type Robot struct {
	name  string
	names map[string]struct{}
}

// Name returns the Robot's name
func (r *Robot) Name() string {
	if r.name == "" {
		r.Reset()
	}
	return r.name
}

// Reset the Robot's name
func (r *Robot) Reset() {
	if r.names == nil {
		r.names = make(map[string]struct{})
	}
	for {
		name := r.StringWithCharset(2, letters) + r.StringWithCharset(3, numbers)
		if _, ok := r.names[name]; !ok {
			r.name = name
			r.names[name] = struct{}{}
			break
		}
	}
}

// StringWithCharset returns a string of length from the given charset
func (r *Robot) StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}
