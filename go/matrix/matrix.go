package matrix

import "strings"

type Matrix struct {
	in   string
	ok   bool
	rows [][]int
	cols [][]int
}

func New(input string) (*Matrix, error) {
	// split on \n then parse each line
	lines := strings.Split(input, "\n")
	for l = range lines {

	}
	return new(Matrix), nil
}

func (m *Matrix) Set(r, c, val int) error {
	return nil
}

func Cols() [][]int {
	return nil
}

func Rows() [][]int {
	return nil
}
