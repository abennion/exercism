module Accumulate exposing (..)

import List exposing (map)


accumulate : (a -> b) -> List a -> List b
accumulate f x =
  map f x
