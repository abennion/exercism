// Package tree is for doing tree stuff
// I copied liberally from another example out there, but
// I neglected to save the username of the author.
package tree

import (
	"fmt"
)

// Record of a parent-child relationship.
type Record struct {
	ID, Parent int
}

// Node of a tree.
type Node struct {
	ID       int
	Children []*Node
}

// Build returns a tree of Nodes from an unordered list of parent-child records.
func Build(records []Record) (*Node, error) {
	var ok bool
	nodes := map[int]*Node{}
	parents := map[int]*Node{}

	for _, r := range records {
		// If already found
		if _, ok = nodes[r.ID]; ok {
			return nil, fmt.Errorf("duplicate node")
		}

		// If not root and id is less than parent
		if !(r.ID == 0 && r.Parent == 0) && r.ID <= r.Parent {
			return nil, fmt.Errorf("cycle directly")
		}

		// If id greater than number of records
		if r.ID > len(records)-1 {
			return nil, fmt.Errorf("non-continuous")
		}

		// Get node from parents or create a new one
		if p, ok := parents[r.ID]; ok {
			nodes[r.ID] = p
		} else {
			nodes[r.ID] = &Node{ID: r.ID}
		}

		// If parent doesn't exist, get it from nodes or create a new one
		if _, ok = parents[r.Parent]; !ok {
			if n, ok := nodes[r.Parent]; ok {
				parents[r.Parent] = n
			} else {
				parents[r.Parent] = &Node{ID: r.Parent}
			}
		}

		// If not root node
		if r.Parent != r.ID {
			// Find the index for the record within children
			i := 0
			for i = 0; i < len(parents[r.Parent].Children); i++ {
				if parents[r.Parent].Children[i].ID > r.ID {
					break
				}
			}

			// Increase length of slice
			parents[r.Parent].Children = append(parents[r.Parent].Children, nil)

			// Copy children with higher ids to the right
			if i != len(parents[r.Parent].Children)-1 {
				copy(parents[r.Parent].Children[i+1:], parents[r.Parent].Children[i:])
			}

			// Assign the node
			parents[r.Parent].Children[i] = nodes[r.ID]
		}
	}

	if len(records) == 0 {
		return nil, nil
	}

	return parents[0], nil
}
