module DifferenceOfSquares exposing (difference, squareOfSum, sumOfSquares)

import List exposing (foldl, range, sum)


square : number -> number
square =
    flip (^) 2


squareOfSum : Int -> Int
squareOfSum =
    square << sum << range 1


sumOfSquares : Int -> Int
sumOfSquares =
    foldl ((+) << square) 0 << range 1


difference : Int -> Int
difference n =
    squareOfSum n - sumOfSquares n
