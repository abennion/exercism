module PhoneNumber exposing (..)

import String
import Char


getNumber : String -> Maybe String
getNumber number =
  number
    |> String.filter Char.isDigit
    |> (\s -> (s, String.length s))
    |> validate


validate : (String, Int) -> Maybe String
validate (number, length) =
  if length == 10 then
    Just number

  else if length == 11 && String.startsWith "1" number then
    Just (String.dropLeft 1 number)

  else
    Nothing


prettyPrint : String -> Maybe String
prettyPrint number =
  case getNumber number of
    Just num ->
      Just ("(" ++ (String.slice 0 3 num) ++ ") " 
        ++ (String.slice 3 6 num) ++ "-" ++ (String.slice 6 10 num))

    Nothing ->
      Nothing
