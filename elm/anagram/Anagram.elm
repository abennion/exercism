module Anagram exposing (..)


import List
import String


isAnagram : String -> String -> Bool
isAnagram a b =
  let
    a = String.toLower a
    b = String.toLower b
    sort = String.toList >> List.sort >> String.fromList
  in
    a /= b && sort a == sort b


detect : String -> List String -> List String
detect word words =
  List.filter (isAnagram word) words
