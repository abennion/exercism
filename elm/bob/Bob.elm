-- credit @tbrenner
module Bob exposing (..)

import String exposing (any, slice, toUpper, length)
import Char exposing (isUpper)

hey : String -> String
hey s =
  if String.trim s == "" then
    "Fine. Be that way!"

  else if (any isUpper s) && (toUpper s == s) then
    "Whoa, chill out!"

  else if  slice -1 (length s) s == "?" then
    "Sure."

  else
    "Whatever."
