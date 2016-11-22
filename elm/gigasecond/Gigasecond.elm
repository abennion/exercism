module Gigasecond exposing (add)

import Date


add : Date.Date -> Date.Date
add date =
    date
        |> Date.toTime
        |> (+) (10 ^ 12)
        |> Date.fromTime
