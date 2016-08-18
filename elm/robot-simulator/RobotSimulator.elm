module RobotSimulator exposing (..)

import String


type Bearing =
  North
  | East
  | South
  | West


type alias Coordinates =
  { x : Int
  , y : Int
  }


type alias Robot =
  { bearing : Bearing
  , coordinates : Coordinates
  }


defaultRobot : Robot
defaultRobot =
  { bearing = North
  , coordinates =
    { x = 0
    , y = 0
    }
  }


bearing : Robot -> Bearing
bearing robot =
  .bearing robot


turnRight : Robot -> Robot
turnRight robot =
  case .bearing robot of
    North ->
      { robot | bearing = East }

    East ->
      { robot | bearing = South }

    South ->
      { robot | bearing = West }

    West ->
      { robot | bearing = North }


turnLeft : Robot -> Robot
turnLeft robot =
  case .bearing robot of
    North ->
      { robot | bearing = West }

    East ->
      { robot | bearing = North }

    South ->
      { robot | bearing = East }

    West ->
      { robot | bearing = South }


advance : Robot -> Robot
advance robot =
  case .bearing robot of
    North ->
      { robot | coordinates = { x = robot.coordinates.x, y = robot.coordinates.y + 1 } }

    East ->
      { robot | coordinates = { x = robot.coordinates.x + 1, y = robot.coordinates.y } }

    South ->
      { robot | coordinates = { x = robot.coordinates.x, y = robot.coordinates.y - 1 } }

    West ->
      { robot | coordinates = { x = robot.coordinates.x - 1, y = robot.coordinates.y } }


instruct : Char -> Robot -> Robot
instruct instruction robot =
  case instruction of
    'L' ->
      turnLeft robot

    'R' ->
      turnRight robot

    'A' ->
      advance robot

    _ ->
      robot


simulate : String -> Robot -> Robot
simulate instructions robot =
  List.foldl instruct robot (String.toList instructions)


