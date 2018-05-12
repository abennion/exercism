package tournament

import (
	"bufio"
	"fmt"
	"io"
	"strings"
)

// Team information and statistics.
type Team struct {
	Name           string
	MP, W, D, L, P int
}

// Teams represents a collection of teams.
type Teams struct {
	Teams map[string]*Team
}

// NewTeam returns a new value of type Team.
func NewTeam(name string) *Team {
	t := new(Team)
	t.Name = name
	return t
}

// Won updates a winning team's statistics.
func (t *Team) Won() {
	t.MP++
	t.W++
	t.P += 3
}

// Lost updates a losing team's statistics.
func (t *Team) Lost() {
	t.MP++
	t.L++
}

// Tied updates a tied team's statistics.
func (t *Team) Tied() {
	t.MP++
	t.D++
	t.P++
}

// ToString returns a string representation of a team's statistics
func (t *Team) ToString() string {
	return fmt.Sprintf("%-30v | %2v | %2v | %2v | %2v | %2v", t.Name, t.MP, t.W, t.D, t.L, t.P)
}

// NewTeams returns a new value of type Teams.
func NewTeams() *Teams {
	teams := new(Teams)
	teams.Teams = make(map[string]*Team)
	return teams
}

// ParseResult parses a string representing a contest outcome.
func (teams *Teams) ParseResult(result string) error {
	// ignore comments and newlines
	if strings.TrimSpace(result) == "" || string([]rune(result)[0]) == "#" {
		return nil
	}
	ss := strings.Split(result, ";")
	if len(ss) != 3 {
		return fmt.Errorf("invalid result")
	}
	if _, ok := teams.Teams[ss[0]]; !ok {
		teams.Teams[ss[0]] = NewTeam(ss[0])
	}
	if _, ok := teams.Teams[ss[1]]; !ok {
		teams.Teams[ss[1]] = NewTeam(ss[1])
	}
	switch ss[2] {
	case "win":
		teams.Teams[ss[0]].Won()
		teams.Teams[ss[1]].Lost()
	case "draw":
		teams.Teams[ss[0]].Tied()
		teams.Teams[ss[1]].Tied()
	case "loss":
		teams.Teams[ss[0]].Lost()
		teams.Teams[ss[1]].Won()
	default:
		return fmt.Errorf("invalid contest outcome")
	}
	return nil
}

// ToSlice returns a slice of Teams ranked by standings.
func (teams *Teams) ToSlice() []*Team {
	var ts []*Team
	for _, t := range teams.Teams {
		j := 0
		for j = 0; j < len(ts); j++ {
			// if empty or points are greater
			if ts[j] == nil || t.P > ts[j].P {
				break
			}
			// if points equal and name comes before
			if t.P == ts[j].P && t.Name < ts[j].Name {
				break
			}
		}
		ts = append(ts, nil)
		copy(ts[j+1:], ts[j:])
		ts[j] = t
	}
	return ts
}

// ToString returns a string representation of the tournament's results.
func (teams *Teams) ToString() string {
	ts := teams.ToSlice()
	s := fmt.Sprintln("Team                           | MP |  W |  D |  L |  P")
	for _, t := range ts {
		s += fmt.Sprintln(t.ToString())
	}
	return s
}

// Tally writes a string representing the tournament results to the given writer.
func Tally(r io.Reader, w io.Writer) error {
	teams := NewTeams()
	scanner := bufio.NewScanner(r)
	for scanner.Scan() {
		if err := teams.ParseResult(scanner.Text()); err != nil {
			return err
		}
	}
	io.WriteString(w, teams.ToString())
	return scanner.Err()
}
