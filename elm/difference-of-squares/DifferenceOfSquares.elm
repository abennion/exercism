module DifferenceOfSquares exposing (squareOfSum, sumOfSquares, difference)

import List exposing (sum, map)


squareOfSum : Int -> Int
squareOfSum num =
  (sum [1..num])^2


sumOfSquares : Int -> Int
sumOfSquares num =
  sum (map (\x -> x^2) [1..num])


difference : Int -> Int
difference num =
  squareOfSum num - sumOfSquares num
