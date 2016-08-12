module Raindrops exposing (..)

import String exposing (isEmpty, concat)
import List exposing (foldl, filterMap)


type alias RaindropType =
  { name : String
  , factor : Int
  }


--raindropTypes : List RaindropType
raindropTypes =
  [ { name = "Pling", factor = 3 }
  , { name = "Plang", factor = 5 }
  , { name = "Plong", factor = 7 }
  ]


getRaindropName : Int -> RaindropType -> Maybe String
getRaindropName num dropType =
  if num % dropType.factor == 0 then
    Just dropType.name

  else
    Nothing


raindrops : Int -> String
raindrops num =
  let
    res = concat (filterMap (getRaindropName num) raindropTypes)
  in
    if isEmpty res then
      toString num
    else
      res
