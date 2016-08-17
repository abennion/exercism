module GradeSchool exposing (..)

import Set


type alias Grade =
  (Int, List String)


empty : List Grade
empty =
  []


addStudent : Int -> String -> List Grade -> List Grade
addStudent grade name school =
  if List.length (List.filter (\(g, names) -> g == grade) school) == 0 then
    List.sort ((grade, [name]) :: school)
  else
    school
      |> List.map (\(g, names) -> if g == grade then (g, List.sort (name :: names)) else (g, names))


studentsInGrade : Int -> List Grade -> List String
studentsInGrade grade school =
  school
    |> List.filter (\(g, names) -> g == grade)
    |> List.head
    |> Maybe.withDefault (0, [])
    |> (\(g, names) -> names)


allStudents : List Grade -> List Grade
allStudents school =
  school
