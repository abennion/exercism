module HelloWorld exposing (..)


helloWorld : Maybe String -> String
helloWorld name =
    case name of
        Nothing ->
            "Hello, World!"

        Just n ->
            "Hello, " ++ n ++ "!"
