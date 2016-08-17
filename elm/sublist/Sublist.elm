module Sublist exposing (..)

import List
import Array


type ListComparison =
  Equal
  | Sublist
  | Superlist
  | Unequal


isSublist : List a -> List a -> Bool
isSublist xs ys =
  if xs == (List.take (List.length xs) ys) then
    True
  else if List.length xs < List.length ys then
    isSublist xs (List.tail ys |> Maybe.withDefault [])
  else
    False


sublist : List a -> List a -> ListComparison
sublist xs ys =
  if xs == ys then
    Equal
  else if isSublist xs ys then
    Sublist
  else if isSublist ys xs then
    Superlist
  else
    Unequal


version : Int
version =
  2
