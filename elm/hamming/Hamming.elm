module Hamming exposing (..)

import String
import List


distance a b =
  let
    distance = List.sum
      (List.map2 (\a b -> if a == b then 0 else 1)
      (String.toList a) (String.toList b))
  in
    if String.length a /= String.length b then
      Nothing
    else
      Just distance
