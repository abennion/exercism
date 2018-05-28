package robotname

import (
	"math/rand"
	"sync"
	"time"
)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

// Robot represents a type of Robot.
type Robot struct {
	lk   sync.Mutex
	name string
}

type names struct {
	lk   sync.Mutex
	seen map[string]bool
}

type lockedRand struct {
	lk sync.Mutex
	r  *rand.Rand
}

func (lr *lockedRand) Intn(n int) (i int) {
	lr.lk.Lock()
	i = lr.r.Intn(n)
	lr.lk.Unlock()
	return
}

var robotNames = &names{seen: make(map[string]bool)}
var localRand *lockedRand

func init() {
	localRand = &lockedRand{r: rand.New(rand.NewSource(time.Now().UnixNano()))}
}

// Name returns the name of the Robot.
func (r *Robot) Name() (name string) {
	r.lk.Lock()
	if r.name == "" {
		r.name = robotNames.generateName()
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

func (ns *names) generateName() (name string) {
	for {
		name = randString(2, letters) + randString(3, numbers)
		ns.lk.Lock()
		_, ok := ns.seen[name]
		if !ok {
			ns.seen[name] = true
		}
		ns.lk.Unlock()
		if !ok {
			break
		}
	}
	return
}

func randString(length int, charset string) string {
	bs := make([]byte, length)
	for i := range bs {
		bs[i] = charset[localRand.Intn(len(charset))]
	}
	return string(bs)
}
