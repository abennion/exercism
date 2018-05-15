package matrix

import (
	"fmt"
	"strconv"
	"strings"
)

type Matrix struct {
	data [][]int
}

func New(input string) (*Matrix, error) {
	rows := strings.Split(input, "\n")
	rowLength := len(rows)
	m := new(Matrix)
	m.data = make([][]int, rowLength)
	colLength := 0
	for x, row := range rows {
		cols := strings.Split(strings.TrimSpace(row), " ")
		if x == 0 {
			colLength = len(cols)
		} else {
			if colLength != len(cols) {
				return nil, fmt.Errorf("uneven rows")
			}
		}
		if colLength == 0 {
			return nil, fmt.Errorf("row empty")
		}
		m.data[x] = make([]int, colLength)
		for y, col := range cols {
			val, err := strconv.Atoi(col)
			if err != nil {
				return nil, err
			}
			m.Set(x, y, val)
		}
	}
	return m, nil
}

func (m *Matrix) Set(r, c, val int) bool {
	if r >= 0 && r < len(m.data) && c >= 0 && c < len(m.data[0]) {
		m.data[r][c] = val
		return true
	}
	return false
}

func (m *Matrix) Cols() [][]int {
	rowLength := len(m.data)
	colLength := len(m.data[0])
	data := make([][]int, colLength)
	for i := 0; i < colLength; i++ {
		data[i] = make([]int, rowLength)
		for j := 0; j < rowLength; j++ {
			data[i][j] = m.data[j][i]
		}
	}
	return data
}

func (m *Matrix) Rows() [][]int {
	rowLength := len(m.data)
	colLength := len(m.data[0])
	data := make([][]int, rowLength)
	for i := 0; i < rowLength; i++ {
		data[i] = make([]int, colLength)
		for j := 0; j < colLength; j++ {
			data[i][j] = m.data[i][j]
		}
	}
	return data
}
