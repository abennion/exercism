// Package tree is for doing tree stuff
package tree

import (
	"errors"
)

// Record is a struct contianing ids and parent ids
type Record struct {
	ID, Parent int
}

// Node is a struct containing IDs and an array of children nodes
type Node struct {
	ID       int
	Children []*Node
}

// Build is a funciton that builds the tree
func Build(records []Record) (*Node, error) {
	var ok bool
	nodes := map[int]*Node{}
	parents := map[int]*Node{}

	for _, rec := range records {
		if _, ok = nodes[rec.ID]; ok || (rec.ID <= rec.Parent && !(rec.ID == 0 && rec.Parent == 0)) || rec.ID >= len(records) {
			return nil, errors.New("Failure Situation")
		}

		nodes[rec.ID], ok = parents[rec.ID]
		if !ok {
			nodes[rec.ID] = &Node{ID: rec.ID}
		}
		if _, ok = parents[rec.Parent]; !ok {
			parents[rec.Parent], ok = nodes[rec.Parent]
			if !ok {
				parents[rec.Parent] = &Node{ID: rec.Parent}
			}
		}
		// if it is root node don't add children
		if rec.Parent != rec.ID {
			i := 0
			for i = 0; i < len(parents[rec.Parent].Children); i++ {
				if parents[rec.Parent].Children[i].ID > rec.ID {
					break
				}
			}
			parents[rec.Parent].Children = append(parents[rec.Parent].Children, nil)
			if i != len(parents[rec.Parent].Children)-1 {
				copy(parents[rec.Parent].Children[i+1:], parents[rec.Parent].Children[i:])
			}
			parents[rec.Parent].Children[i] = nodes[rec.ID]
		}
	}
	if len(records) == 0 {
		return nil, nil
	}
	return parents[0], nil
}
