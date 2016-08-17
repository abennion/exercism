module Series exposing (..)

import String
import Maybe
import Regex exposing (..)


sliceBy : Int -> List Int -> List (List Int)
sliceBy n xs =
  if n > List.length xs then
    []
  else
    (List.take n xs) :: sliceBy n (List.drop 1 xs)


slices : Int -> String -> Result String (List (List Int))
slices n str =
  if n == 0 then
    Err "Invalid size: 0"
  else
    str
      |> String.split ""
      |> List.map String.toInt
      |> List.foldr (Result.map2 (::)) (Ok [])
      |> Result.map (sliceBy n)
