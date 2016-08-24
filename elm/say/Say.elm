module Say exposing (say, SayError(..))


import List
import String


type SayError = Negative | TooLarge


english =
  Dict.fromList
    [ (0, "zero")
    , (1, "one")
    , (2, "two")
    , (3, "three")
    , (4, "four")
    , (5, "five")
    , (6, "six")
    , (7, "seven")
    , (8, "eight")
    , (9, "nine")
    , (10, "ten")
    , (11, "eleven")
    , (12, "twelve")
    , (13, "thirteen")
    , (14, "fourteen")
    , (15, "fifteen")
    , (16, "sixteen")
    , (17, "seventeen")
    , (18, "eighteen")
    , (19, "nineteen")
    , (20, "twenty")
    , (30, "thirty")
    , (40, "fourty")
    , (50, "fifty")
    , (60, "sixty")
    , (70, "seventy")
    , (80, "eighty")
    , (90, "ninety")
    , (100, "hundred")
    , (1000, "thousand")
    , (1000000, "million")
    , (1000000000, "billion")
    , (1000000000000, "trillion")
    ]


translate num =
  let
    tens = num % 100
    hundreds = num - tens
    ones = tens % 10

    -- if 123, then 3
    onesText =
      case ones > 0 of
        True ->
          Dict.get ones english

        False ->
          ""

    tensText =
      case Dict.member tens english of
        True ->
          Dict.get tens english
            


        False ->
          " " ++ Dict.get ones english

  in
    if hundreds > 0 then
      (toString (Dict.get hundreds english)) ++ " hundred" ++ (translate tens)
    else if num > 9 then
      if Dict.member tens english then
        (toString (Dict.get tens english)) ++ "-" -- that's conditional...
      else


toText : Int -> List String
toText num =
  let
    x = num % 1000
    rest = (toFloat (num - x)) / 1000 |> floor
  in
    case num >= 1000 of
      False ->
        [text]

      True ->
        text :: toText rest


say num =
  let
    -- generate List.map (\n -> 10^(n*3)) [1..{some len}] and then hash
    text = List.map2 (\a b -> a ++ " " ++ b |> String.trim) ["million", "thousand", ""] (translate num)
  in
    Ok (String.join " " text)
