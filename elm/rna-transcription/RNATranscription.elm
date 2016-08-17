module RNATranscription exposing (..)

import Regex exposing (..)
import String
import Char
import List


transcribe : Char -> Maybe Char
transcribe nuc =
  case nuc of
    'G' -> Just 'C'
    'C' -> Just 'G'
    'T' -> Just 'A'
    'A' -> Just 'U'
    _ -> Nothing


toRNA : String -> Result Char String
toRNA strand =
  let
    nuc =
      strand
        |> find (AtMost 1) (regex "[^GCTA]")
        |> List.map .match
        |> List.head
        |> Maybe.withDefault ""

    invalidNuc = case nuc /= "" of
      True -> String.uncons nuc
      False -> Nothing
  in
    case invalidNuc of
      Just (char, rest) ->
        Err char

      Nothing ->
        Ok (String.fromList (List.filterMap transcribe (String.toList strand)))
