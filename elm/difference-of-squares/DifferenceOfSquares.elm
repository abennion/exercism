module DifferenceOfSquares exposing (difference, squareOfSum, sumOfSquares)


squareOfSum : Int -> Int
squareOfSum n =
    List.range 1 n
        |> List.foldr (+) 0
        |> (\x -> x ^ 2)



-- square =
--     flip (^) 2
-- squareOfSum =
--     square << sum << range 1
-- sumOfSquares =
--     foldl ((+) << square) 0 << range 1


sumOfSquares : Int -> Int
sumOfSquares n =
    List.range 1 n
        |> List.map (\x -> x ^ 2)
        |> List.foldr (+) 0


difference : Int -> Int
difference n =
    squareOfSum n - sumOfSquares n
