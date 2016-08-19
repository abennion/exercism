module AtbashCipher exposing (..)

import String
import Regex exposing (..)
import Char


group str =
  case str of
    "" ->
      ""

    s ->
      String.left 5 s ++ " " ++ group (String.dropLeft 5 s)

encode str =
  ""

{-
  encodeOld str =
  str
    |> String.toLower
      >> replace All (regex "[^a-z]") (\_ -> "")
      >> String.map (\c -> (Char.toCode >> (\x -> 219 - x) >> Char.fromCode) c)
      >> group
-}

decode str =
  ""
