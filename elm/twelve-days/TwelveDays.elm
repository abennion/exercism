module TwelveDays exposing (recite)

import Dict exposing (Dict, fromList, get)


-- On the twelfth day of Christmas my true love gave to me


type alias Day =
    { name : String
    , gift : String
    }


days : Dict Int Day
days =
    fromList
        [ ( 1
          , { name = "first"
            , gift = "a Partridge in a Pear Tree"
            }
          )
        , ( 2
          , { name = "second"
            , gift = "two Turtle Doves"
            }
          )
        , ( 3
          , { name = "third"
            , gift = "three French Hens"
            }
          )
        , ( 4
          , { name = "fourth"
            , gift = "four Calling Birds"
            }
          )
        , ( 5
          , { name = "fifth"
            , gift = "five Gold Rings"
            }
          )
        , ( 6
          , { name = "sixth"
            , gift = "six Geese-a-Laying"
            }
          )
        , ( 7
          , { name = "seventh"
            , gift = "seven Swans-a-Swimming"
            }
          )
        , ( 8
          , { name = "eighth"
            , gift = "eight Maids-a-Milking"
            }
          )
        , ( 9
          , { name = "nineth"
            , gift = "nine Ladies Dancing"
            }
          )
        , ( 10
          , { name = "tenth"
            , gift = "ten Lords-a-Leaping"
            }
          )
        , ( 11
          , { name = "eleventh"
            , gift = "eleven Pipers Piping"
            }
          )
        , ( 12
          , { name = "twelth"
            , gift = "twelve Drummers Drumming"
            }
          )
        ]


reciteDays : Int -> String
reciteDays day =
    let
        firstGift =
            "a Partridge in a Pear Tree"

        gifts =
            days
                |> Dict.toList
                |> List.reverse
                |> List.filterMap
                    (\( k, v ) ->
                        if k <= day && k > 1 then
                            Just v.gift
                        else
                            Nothing
                    )
                |> String.join ", "
    in
    if day > 1 then
        gifts ++ ", and a Partridge in a Pear Tree"
    else
        gifts ++ "a Partridge in a Pear Tree"


reciteVerse : Int -> String
reciteVerse day =
    case get day days of
        Just day_ ->
            "On the "
                ++ day_.name
                ++ " day of Christmas my true love gave to me, "
                ++ reciteDays day
                ++ "."

        Nothing ->
            ""


recite : Int -> Int -> List String
recite start stop =
    List.range start stop
        |> List.map reciteVerse
