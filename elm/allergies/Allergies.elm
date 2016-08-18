module Allergies exposing (..)

import List exposing (filter)
import Dict exposing (get, keys)
import Bitwise exposing (and)
import Maybe exposing (withDefault)


allergies =
  Dict.fromList
    [ ("eggs", 1)
    , ("peanuts", 2)
    , ("shellfish", 4)
    , ("strawberries", 8)
    , ("tomatoes", 16)
    , ("chocolate", 32)
    , ("pollen", 64)
    , ("cats", 128)
    ]


isAllergicTo allergy score =
  and (get allergy allergies |> withDefault 0) score /= 0


toList score =
  filter (\k -> isAllergicTo k score) (keys allergies)
