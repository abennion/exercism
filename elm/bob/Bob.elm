module Bob exposing (hey)

import Char exposing (isUpper)
import String exposing (any, right, toUpper, trim)


hey : String -> String
hey remark =
    let
        isYell s =
            any isUpper s && toUpper s == s

        isQuestion s =
            right 1 s == "?"
    in
    if trim remark == "" then
        "Fine. Be that way!"
    else if isYell remark && isQuestion remark then
        "Calm down, I know what I'm doing!"
    else if isYell remark then
        "Whoa, chill out!"
    else if isQuestion remark then
        "Sure."
    else
        "Whatever."
