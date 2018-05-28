package robotname

import (
	"math/rand"
	"sync"
	"time"
)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

// Robot is a robot.
type Robot struct {
	lk   sync.Mutex
	name string
}

type names struct {
	lk   sync.Mutex
	seen map[string]bool
}

var robotNames = &names{seen: make(map[string]bool)}

// Name returns the name of the Robot.
func (r *Robot) Name() (name string) {
	r.lk.Lock()
	if r.name == "" {
		r.name = robotNames.newName()
	}
	name = r.name
	r.lk.Unlock()
	return
}

// Reset returns the Robot to factory settings.
func (r *Robot) Reset() {
	r.lk.Lock()
	r.name = ""
	r.lk.Unlock()
}

func (ns *names) newName() (name string) {
	for {
		// Still don't understand why seeding rand
		// in func init() was causing the benchmark
		// to time out.
		//
		// There are issues with concurrency when
		// using the globalRand object.
		rand.Seed(time.Now().UnixNano())
		name = randString(2, letters) + randString(3, numbers)
		ns.lk.Lock()
		_, ok := ns.seen[name]
		if !ok {
			ns.seen[name] = true
		}
		ns.lk.Unlock()
		if !ok {
			return
		}
	}
}

func randString(length int, charset string) string {
	bs := make([]byte, length)
	for i := range bs {
		bs[i] = charset[rand.Intn(len(charset))]
	}
	return string(bs)
}
