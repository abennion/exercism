module Raindrops exposing (..)

import String exposing (isEmpty)
import List exposing (foldl)

factors = [ (3, "Pling")
          , (5, "Plang")
          , (7, "Plong")
          ]


getRaindrop : Int -> (Int, String) -> String -> String
getRaindrop num (factor, raindrop) retVal =
  if num % factor == 0 then
    retVal ++ raindrop
  else
    retVal


raindrops : Int -> String
raindrops num =
  let
    res = List.foldl (getRaindrop num) "" factors
  in
    if String.isEmpty res then
      toString num
    else
      res
