package tree

import (
	"fmt"
	"sort"
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

// NodeMap is a map of Nodes by ID.
type NodeMap map[int]*Node

// GetNode returns a Node found in the specified NodeMap or a new Node.
func GetNode(ID int, nodes NodeMap) *Node {
	if n, ok := nodes[ID]; ok {
		return n
	}
	return &Node{ID: ID}
}

// Build returns a tree of Nodes from an unordered list of parent-child records.
func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}

	lookup := NodeMap{}
	var root *Node
	var ids []int

	for _, r := range records {
		if r.ID < r.Parent {
			return nil, fmt.Errorf("higher id parent of lower id")
		}

		ids = append(ids, r.ID)
		node := GetNode(r.ID, lookup)
		lookup[r.ID] = node

		if r.ID == r.Parent {
			if root != nil {
				return nil, fmt.Errorf("duplicate root")
			}
			root = node
			continue
		}

		parent := GetNode(r.Parent, lookup)
		lookup[r.Parent] = parent

		appended := false
		for i, child := range parent.Children {
			if node.ID == child.ID {
				return nil, fmt.Errorf("duplicate node")
			}
			if node.ID < child.ID {
				parent.Children = append(parent.Children[:i], append([]*Node{node}, parent.Children[i:]...)...)
				appended = true
				break
			}
		}
		if !appended {
			parent.Children = append(parent.Children, node)
		}
	}

	sort.Ints(ids)
	if ids[len(ids)-1] > len(ids)-1 {
		return nil, fmt.Errorf("non-continuous")
	}

	return root, nil
}
