module ListOps exposing (..)


length : List a -> Int
length a =
  case a of
    [] ->
      0

    head :: tail ->
      (length tail) + 1


reverse : List a -> List a
reverse a =
  case a of
    [] ->
      []

    head :: tail ->
      (reverse tail) ++ [head]


map : (a -> b) -> List a -> List b
map fn a =
  case a of
    [] ->
      []

    head :: tail ->
      fn head :: map fn tail


filter : (a -> Bool) -> List a -> List a
filter fn a =
  case a of
    [] ->
      []

    head :: tail ->
      if fn head == True then
        head :: filter fn tail

      else
        filter fn tail


foldl : (a -> b -> b) -> b -> List a -> b
foldl fn r a =
  case a of
    [] ->
      r

    head :: tail ->
      foldl fn (fn head r) tail


foldr : (a -> b -> b) -> b -> List a -> b
foldr fn r a =
  foldl fn r (reverse a)


append : List a -> List a -> List a
append a b =
  a ++ b


concat : List (List a) -> List a
concat a =
  case a of
    [] ->
      []

    head :: tail ->
      head ++ (concat tail)
