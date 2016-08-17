module Series exposing (..)

import String
import Maybe
import Regex exposing (..)


toInts : String -> List Int
toInts str =
  str
    |> String.split ""
    |> List.map (String.toInt >> Result.toMaybe >> Maybe.withDefault 0)


slices' : Int -> List Int -> List (List Int)
slices' len nums =
  let
    slice = List.take len nums
    tail = case nums of
      [] -> []
      head::tail ->
        case List.length tail >= len of
          True -> tail
          False -> []
  in
    if List.length slice < len then
      [[]]
    else if tail == [] then
      [slice]
    else
      List.append [slice] (slices' len tail)


slices : Int -> String -> Result String (List (List Int))
slices len str =
  let
    invalidChar =
      str
        |> find (AtMost 1) (regex "[^0-9]")
        |> List.map .match
        |> List.head
        |> Maybe.withDefault ""
  in
    if len == 0 then
      Err ("Invalid size: " ++ toString len)
    else if String.length str < len then
      Ok []
    else if invalidChar /= "" then
      case String.toInt invalidChar of
        Err e -> Err e
        _ -> Ok []
    else
      Ok (slices' len (toInts str))
