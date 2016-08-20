module Say exposing (say, SayError(..))

say num =
  Ok ""

type SayError = Negative | TooLarge
