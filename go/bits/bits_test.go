package bits

import (
	"testing"
)

func TestBits(t *testing.T) {
	res := Bits()
	if res {
		t.Logf("pass")
	}
}
