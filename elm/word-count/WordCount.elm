module WordCount exposing (..)

import String exposing (split, join, toLower)
import Dict exposing (Dict)
import Regex exposing (..)


update' : Maybe Int -> Maybe Int
update' i =
  case i of
    Nothing -> Just 1
    Just i  -> Just (i + 1)


wordCount : String -> Dict String Int
wordCount text =
  let
    words =
      text
        |> toLower
        |> find All (regex "\\b[\\w']+\\b")
        |> List.map .match
  in
    case words of
      [] -> Dict.empty
      hd :: tl ->
        Dict.update hd update' (wordCount (join " " tl))
