module NucleotideCount exposing (..)

import String


incrementCount : Char -> { a : Int, t : Int, c : Int, g : Int  } -> { a : Int, t : Int, c : Int, g : Int  }
incrementCount nuc counts =
  case nuc of
    'A' -> { counts | a = counts.a + 1 }
    'T' -> { counts | t = counts.t + 1 }
    'C' -> { counts | c = counts.c + 1 }
    'G' -> { counts | g = counts.g + 1 }
    _ -> counts

nucleotideCounts : String -> { a : Int, t : Int, c : Int, g : Int  }
nucleotideCounts dna =
  String.foldl incrementCount { a = 0, t = 0, c = 0, g = 0 } dna


version : Int
version =
  2
