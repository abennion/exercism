module PhoneNumber exposing (..)

import String
import Regex exposing (..)


getNumber : String -> Maybe String
getNumber str =
  let
    clean = replace All (regex "[^0-9]") (\_ -> "") str
    n = String.length clean
  in
    if n == 10 then
      Just clean

    else if n == 11 && String.slice 0 1 clean == "1" then
      Just (String.dropLeft 1 clean)

    else
      Nothing


prettyPrint : String -> Maybe String
prettyPrint str =
  case getNumber str of
    Just num ->
      Just ("(" ++ (String.slice 0 3 num) ++ ") " 
        ++ (String.slice 3 6 num) ++ "-" ++ (String.slice 6 10 num))

    Nothing ->
      Nothing
