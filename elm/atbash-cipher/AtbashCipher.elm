module AtbashCipher exposing (..)

import String
import Regex exposing (..)
import Char
import Array
import Debug


cipher : String
cipher =
  "zyxwvutsrqponmlkjihgfedcba"


chunk : Int -> String -> List String
chunk size str =
  case str of
    "" ->
      []

    s ->
      List.append [String.left size s] (chunk size (String.dropLeft size s))


group : Int -> String -> String
group size str =
  String.join " " (chunk size str)


encodeChar : Char -> Maybe Char
encodeChar char =
  let
    code = Char.toCode char
  in
    if 48 <= code && code <= 57 then
      Just char

    else if 97 <= code && code <= 122 then
      cipher |> String.toList |> Array.fromList |> Array.get (code - 97)

    else
      Nothing


encode : String -> String
encode str =
  str
    |> String.toLower
    |> String.toList
    |> List.filterMap encodeChar
    |> String.fromList
    |> group 5


indexOf : String -> String -> Maybe Int
indexOf a b =
  b
    |> String.indexes a
    |> List.head


decodeChar : Char -> Maybe Char
decodeChar char =
  let
    index = indexOf (String.fromList [char]) cipher
  in
    case index of
      Just i ->
        Just (Char.fromCode (i + 97))

      Nothing ->
        Nothing


decode : String -> String
decode str =
  str
    |> String.toList
    |> List.filterMap decodeChar
    |> String.fromList
