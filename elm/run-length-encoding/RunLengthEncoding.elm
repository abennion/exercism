module RunLengthEncoding exposing (..)

import Regex exposing (..)
import String
import List

version : Int
version =
  2


encode'' : String -> String
encode'' match =
  let
    char = String.slice 0 1 match
    length = String.length match
  in
    case length > 1 of
      True -> (toString length) ++ char
      False -> char


encode' : List String -> String
encode' matches =
  case matches of
    [] -> ""
    head :: tail ->
      encode'' head ++ encode' tail


encode : String -> String
encode str =
  encode' (find All (regex "([^0-9])\\1*") str |> List.map .match)


decode'' : String -> String
decode'' match =
  let
    n =
      match
        |> find (AtMost 1) (regex "[0-9]+") |> List.map .match
        |> List.head |> Maybe.withDefault "1"
        |> String.toInt |> Result.toMaybe |> Maybe.withDefault 1
    char =
      match
        |> find (AtMost 1) (regex "[^0-9]") |> List.map .match
        |> List.head |> Maybe.withDefault ""
  in
    String.repeat n char


decode' : List String -> String
decode' matches =
  case matches of
    [] -> ""
    head :: tail ->
      decode'' head ++ decode' tail


decode : String -> String
decode str =
  decode' (find All (regex "([0-9]+[^0-9])|.") str |> List.map .match)
