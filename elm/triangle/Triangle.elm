module Triangle exposing (..)

import List exposing (..)
import Array exposing (get)
import Maybe exposing (withDefault)


flippedComparison : comparable -> comparable -> Order
flippedComparison a b =
  case compare a b of
    LT -> GT
    EQ -> EQ
    GT -> LT


triangleKind : number -> number -> number -> Result String String
triangleKind a b c =
  let
    tri = sortWith flippedComparison [a, b, c]
  in
    if sum tri == 0 then
      Err "Invalid lengths"
    else if length (filter (\num -> num < 0) tri) > 0 then
      Err "Invalid lengths"
    else if withDefault 0 (head tri) >= sum (withDefault [] (tail tri)) then
      Err "Violates inequality"
    else if a == b && b == c then
      Ok "equilateral"
    else if a == b || b == c || a == c then
      Ok "isosceles"
    else
      Ok "scalene"
