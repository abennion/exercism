module RomanNumerals exposing (toRoman)

import Dict
import String


numerals =
    Dict.fromList
        [ ( 1000, "M" )
        , ( 900, "CM" )
        , ( 500, "D" )
        , ( 400, "CD" )
        , ( 100, "C" )
        , ( 90, "XC" )
        , ( 50, "L" )
        , ( 40, "XL" )
        , ( 10, "X" )
        , ( 9, "IX" )
        , ( 5, "V" )
        , ( 4, "IV" )
        , ( 1, "I" )
        ]


toRoman' : Int -> String -> (String, Int) -> (String, Int)
toRoman' k v r =
    let
        x = snd r
        count = x // k 
        n = x % k 
    in
        (fst r ++ String.repeat count v, n)


toRoman : Int -> String
toRoman x =
    fst (Dict.foldr toRoman' ("", x) numerals)
