module SumOfMultiples exposing (..)

import Set
import List
import Maybe


multiple : Int -> Int -> Int -> Maybe Int
multiple max i num =
  let
    mult = num * i
  in
    if mult < max then
      Just mult
    else
      Nothing


multiples : List Int -> Int -> Int -> Set.Set Int
multiples nums max i =
  let
    mults = List.filterMap (multiple max i) nums
  in
    if mults /= [] then
      Set.union (Set.fromList mults) (multiples nums max (i + 1))
    else
      Set.empty


sumOfMultiples : List Int -> Int -> Int
sumOfMultiples nums max =
  List.sum (Set.toList (multiples nums max 1))











