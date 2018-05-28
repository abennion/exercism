package robotname

import (
	"math/rand"
	"sync"
	"time"
)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "0123456789"

var seededRand = rand.New(rand.NewSource(time.Now().UnixNano()))

// Robot type
type Robot struct {
	name string
}

// RobotNames manages robot names.
type RobotNames struct {
	names map[string]bool
	mux   sync.Mutex
}

var robotNames = &RobotNames{names: make(map[string]bool)}

// GenerateName returns a new and unique name.
func (rn *RobotNames) GenerateName() (name string) {
	rn.mux.Lock()
	defer rn.mux.Unlock()
	for {
		name = rn.StringWithCharset(2, letters) + rn.StringWithCharset(3, numbers)
		if _, ok := rn.names[name]; !ok {
			break
		}
	}
	rn.names[name] = true
	return
}

// StringWithCharset returns a string of length from the given charset.
func (rn *RobotNames) StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}

// Name returns the Robot's name.
func (r *Robot) Name() string {
	if r.name == "" {
		r.Reset()
	}
	return r.name
}

// Reset the Robot's name.
func (r *Robot) Reset() {
	r.name = robotNames.GenerateName()
}
