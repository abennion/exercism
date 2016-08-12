module Pangram exposing (..)

import List exposing (length)
import Regex exposing (..)


isPangram : String -> Bool
isPangram str =
  str
    |> find All (caseInsensitive (regex "([a-z])(?!.*\\1)"))
    |> (\matches -> length matches == 26)
