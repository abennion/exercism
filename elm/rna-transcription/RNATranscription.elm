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
  if find All (regex "[^GCTA]") strand /= [] then
    if find All (regex "[GCTA]") strand /= [] then
      Err 'U'
    else
      Err 'X'
  else
    Ok (String.fromList (List.filterMap transcribe (String.toList strand)))
