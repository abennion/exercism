module LargestSeriesProduct exposing (..)

import String


chunk : Int -> List a -> List (List a)
chunk l xs =
    if List.length xs > l then
        List.take l xs :: chunk l (List.drop 1 xs)
    else
        [ xs ]


toInts : String -> Result String (List Int)
toInts s =
    s
        |> String.toList
        |> List.map (String.toInt << String.fromChar)
        |> List.foldr (Result.map2 (::)) (Ok [])


largestProduct : Int -> String -> Maybe Int
largestProduct l s =
    if l < 0 || l > String.length s then
        Nothing
    else
        case toInts s of
            Ok xs ->
                chunk l xs
                    |> List.map List.product
                    |> List.maximum

            Err s ->
                Nothing
