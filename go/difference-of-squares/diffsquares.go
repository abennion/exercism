package diffsquares

func SquareOfSums(x int) int {
	y := 0
	for i := 1; i <= x; i++ {
		y += i
	}
	return y * y
}

func SumOfSquares(x int) int {
	y := 0
	for i := 1; i <= x; i++ {
		y += i * i
	}
	return y
}

func Difference(x int) int {
	return SquareOfSums(x) - SumOfSquares(x)
}
