package tree

import (
	"fmt"
	"sort"
)

// Record ...
type Record struct {
	ID, Parent int
}

// Node ...
type Node struct {
	ID       int
	Children []*Node
}

// Build creates a parent-child tree of nodes
func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}

	lookup := make(map[int]*Node)
	var root *Node

	fmt.Println("===========================")
	fmt.Println("records", records)

	var ids []int

	for _, r := range records {
		if r.ID < r.Parent {
			return nil, fmt.Errorf("invalid parent")
		}

		// use this to determine dups and non-continuous
		ids = append(ids, r.ID)

		var node *Node

		// lookup the node
		if n, ok := lookup[r.ID]; ok {
			node = n
		} else {
			node = &Node{ID: r.ID}
			lookup[r.ID] = node
		}

		if r.ID == r.Parent {
			if root != nil {
				return nil, fmt.Errorf("duplicate root")
			}
			root = node
		} else {
			var parent *Node

			// lookup the parent
			if n, ok := lookup[r.Parent]; ok {
				parent = n
			} else {
				parent = &Node{ID: r.Parent}
				lookup[r.Parent] = parent
			}

			fmt.Println("parent:", parent, "node:", node)

			// append node to parent
			appended := false

			l := len(parent.Children)
			for i := 0; i < l; i++ {
				child := parent.Children[i]
				fmt.Println("-----------------------------------")
				fmt.Println("i:", i, "node:", node, "child:", child, "children:", parent.Children)
				// if node.ID > 100 {
				// 	return nil, fmt.Errorf("fucked up")
				// }
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
	}

	// non-continuous means, we're missing an ID in order
	sort.Ints(ids)
	fmt.Println(ids[len(ids)-1], len(ids))
	if ids[len(ids)-1] > len(ids)-1 {
		return nil, fmt.Errorf("non-continuous")
	}
	fmt.Println("lookup", lookup)

	if root == nil || root.ID != 0 {
		return nil, fmt.Errorf("no root node")
	}

	// return the root node
	return root, nil
}

// type Mismatch struct{}

// func (m Mismatch) Error() string {
// 	return "c"
// }

// func Build(records []Record) (*Node, error) {
// 	if len(records) == 0 {
// 		return nil, nil
// 	}
// 	root := &Node{}
// 	todo := []*Node{root}
// 	n := 1
// 	for {
// 		if len(todo) == 0 {
// 			break
// 		}
// 		newTodo := []*Node(nil)
// 		for _, c := range todo {
// 			for _, r := range records {
// 				if r.Parent == c.ID {
// 					if r.ID < c.ID {
// 						return nil, errors.New("a")
// 					} else if r.ID == c.ID {
// 						if r.ID != 0 {
// 							return nil, fmt.Errorf("b")
// 						}
// 					} else {
// 						n++
// 						switch len(c.Children) {
// 						case 0:
// 							nn := &Node{ID: r.ID}
// 							c.Children = []*Node{nn}
// 							newTodo = append(newTodo, nn)
// 						case 1:
// 							nn := &Node{ID: r.ID}
// 							if c.Children[0].ID < r.ID {
// 								c.Children = []*Node{c.Children[0], nn}
// 								newTodo = append(newTodo, nn)
// 							} else {
// 								c.Children = []*Node{nn, c.Children[0]}
// 								newTodo = append(newTodo, nn)
// 							}
// 						default:
// 							nn := &Node{ID: r.ID}
// 							newTodo = append(newTodo, nn)
// 						breakpoint:
// 							for range []bool{false} {
// 								for i, cc := range c.Children {
// 									if cc.ID > r.ID {
// 										a := make([]*Node, len(c.Children)+1)
// 										copy(a, c.Children[:i])
// 										copy(a[i+1:], c.Children[i:])
// 										copy(a[i:i+1], []*Node{nn})
// 										c.Children = a
// 										break breakpoint
// 									}
// 								}
// 								c.Children = append(c.Children, nn)
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 		todo = newTodo
// 	}
// 	if n != len(records) {
// 		return nil, Mismatch{}
// 	}
// 	if err := chk(root, len(records)); err != nil {
// 		return nil, err
// 	}
// 	return root, nil
// }

// func chk(n *Node, m int) (err error) {
// 	if n.ID > m {
// 		return fmt.Errorf("z")
// 	} else if n.ID == m {
// 		return fmt.Errorf("y")
// 	} else {
// 		for i := 0; i < len(n.Children); i++ {
// 			err = chk(n.Children[i], m)
// 			if err != nil {
// 				return
// 			}
// 		}
// 		return
// 	}
// }
