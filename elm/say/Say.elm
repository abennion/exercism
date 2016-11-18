module Say exposing (say, SayError(..))


import List
import String
import Dict
import Maybe


type SayError =
  Negative
  | TooLarge


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
    , (40, "forty")
    , (50, "fifty")
    , (60, "sixty")
    , (70, "seventy")
    , (80, "eighty")
    , (90, "ninety")
    , (100, "hundred")
    , (1000, "thousand")
    , (1000000, "million")
    , (1000000000, "billion")
    ]


--TODO: this should take a number of any size, translate a chunk of it,
-- and then recursively handle the rest...

translate : Dict.Dict Int String -> Int -> String
translate lang num =
  let
    hundreds = (toFloat num) / 100 |> floor
    tens = num % 100
    ones = tens % 10

    tensText =
      if tens == 0 then
        ""

      else if tens < 20 || tens % 10 == 0 then
        Dict.get tens lang |> Maybe.withDefault ""

      else
        (Dict.get (tens - ones) lang |> Maybe.withDefault "")
          ++ "-"
          ++ (Dict.get ones lang |> Maybe.withDefault "")

    hundredsText =
      (Dict.get hundreds lang |> Maybe.withDefault "")
        ++ " "
        ++ (Dict.get 100 lang |> Maybe.withDefault "")

  in
    if hundreds > 0 then
      if tens > 0 then
        hundredsText ++ " and " ++ tensText

      else
        hundredsText

    else
      tensText


chunk : Int -> Int -> List Int
chunk len num =
  let
    n = 10^len
    x = num % n
    rest = (toFloat (num - x)) / n |> floor
  in
    case num >= n of
      True ->
        List.append (chunk len rest) [x]

      False ->
        [x]


say : Int -> Result SayError String
say num =
  let
    lang = english
    nums = chunk 3 num |> List.reverse
    qualifiers =
      [1..((List.length nums) - 1)]
        |> List.map (\n -> Dict.get (1000^n) lang |> Maybe.withDefault "")
    text =
      case nums of
        head::tail ->
          List.map2 (\a b -> if a /= 0 then (translate lang a) ++ " " ++ b else (translate lang a) |> String.trim) tail qualifiers
            |> List.append [(\a -> if num > 99 && a > 0 && a < 100 then "and " ++ (translate lang a) else (translate lang a)) head]
            |> List.foldr (\r a -> String.trim (a ++ " " ++ r)) ""
            |> String.trim

        _ ->
          ""
  in
    if num < 0 then
      Err Negative

    else if num >= 1000^4 then
      Err TooLarge

    else if num == 0 then
      Ok (Dict.get num lang |> Maybe.withDefault "")

    else
      Ok text


