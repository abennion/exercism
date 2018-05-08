package robotname

// const charset = "abcdefghijklmnopqrstuvwxyz" +
// 	"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// var seededRand *rand.Rand = rand.New(
// 	rand.NewSource(time.Now().UnixNano()))

// func StringWithCharset(length int, charset string) string {
// 	b := make([]byte, length)
// 	for i := range b {
// 		b[i] = charset[seededRand.Intn(len(charset))]
// 	}
// 	return string(b)
// }

// func String(length int) string {
// 	return StringWithCharset(length, charset)
// }

type Robot struct {
	name  string
	names map[string]struct{}
}

func (r Robot) Name() string {
	if r.name == "" {
		// new name
		for {

		}
	}
	return r.name
}

func (r Robot) Reset() {
	r.name = ""
}
