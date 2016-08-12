module Strain exposing (..)

import List exposing (filter)


keep : (a -> Bool) -> List a -> List a
keep f x =
  case x of
    [] -> []
    hd :: tl ->
      (if f hd then [hd] else []) ++ (keep f tl)


discard : (a -> Bool) -> List a -> List a
discard f x =
  keep (not << f) x
