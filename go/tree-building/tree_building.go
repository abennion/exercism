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

type NodeData struct {
	Node       *Node
	FromRecord bool
}

type NodeTable struct {
	NodeMap map[int]NodeData
}

func (nt NodeTable) GetNode(ID int, FromRecord bool) *Node {
	if nd, ok := nt.NodeMap[ID]; ok {
		nt.NodeMap[ID] = NodeData{Node: nd.Node, FromRecord: nd.FromRecord || FromRecord}
	} else {
		nt.NodeMap[ID] = NodeData{Node: &Node{ID: ID}, FromRecord: FromRecord}
	}
	return nt.NodeMap[ID].Node
}

// Build returns a tree of Nodes from an unordered list of parent-child records.
func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}

	lookup := NodeTable{NodeMap: make(map[int]NodeData)}

	for _, r := range records {
		if r.ID < r.Parent {
			return nil, fmt.Errorf("higher id parent of lower id")
		}

		if r.ID == 0 {
			nd, ok := lookup.NodeMap[r.ID]
			if ok && nd.FromRecord {
				return nil, fmt.Errorf("duplicate root")
			}
		} else {
			if r.ID == r.Parent {
				return nil, fmt.Errorf("nope")
			}
		}

		node := lookup.GetNode(r.ID, true)

		if r.ID == 0 {
			continue
		}

		// find duplicate node here
		parent := lookup.GetNode(r.Parent, false)

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

	last := len(lookup.NodeMap) - 1
	if nd, ok := lookup.NodeMap[last]; !ok || nd.Node.ID != last {
		return nil, fmt.Errorf("non-continuous")
	}

	nd, ok := lookup.NodeMap[0]
	if !ok || !nd.FromRecord {
		return nil, fmt.Errorf("no root node")
	}
	return nd.Node, nil
}
