//Objective is to insert a value into a BST.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(4)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 7)
tree.addLeftNode(tree.root.left, 1)
tree.addRightNode(tree.root.left, 3)


//O(n) solution that does a dfs traversal through the tree to find the place
//to insert.

function insert(node, val) {
    if (!node) {
        return new Node(val)
    }

    if (val > node.val) {
        node.right = insert(node.right, val)
    } else {
        node.left = insert(node.left, val)
    }

    return node
}
insert(tree.root, 5)
console.log(tree.root)