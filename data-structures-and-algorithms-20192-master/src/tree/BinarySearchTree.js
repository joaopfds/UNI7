import Node from "./Node"

export default class BinarySearchTree {
    constructor() {
        this._root = null
    }

    add(key) {
        if (this._root == null) {
           this._root = new Node(key) 
        } else {
            this.addNode(this._root, key)
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            if (node.hasLeftChild()) {
                this.addNode(node.leftChild, key)                
            } else {
                node.leftChild = new Node(key)
                node.leftChild.parent = node
            }
        } else {
            if(node.hasRightChild()) {
                this.addNode(node.rightChild, key)
            } else {
                node.rightChild = new Node(key)
                node.rightChild.parent = node
            }
        }
    }

    otherAdd(key) {
        if (this._root == null) {
           this._root = new Node(key) 
        } else {
            this.otherAddNode(this._root, key)
        }
    }

    otherAddNode(node, key) {
        let child = (key < node.key) ? "leftChild" : "rightChild"

        if (node[child]) {
            this.otherAddNode(node[child], key)                
        } else {
            node[child] = new Node(key, node)
        }
    }

    search(key) {
        return this.searchNode(this._root, key)
    }

    searchNode(node, key) {
        if (!node) return null

        if (key < node.key)
            return this.searchNode(node.leftChild, key)
        
        if (key > node.key)
            return this.searchNode(node.rightChild, key)

        return node
    }

    preOrder(operation) {
        this.preOrderNode(this._root, operation)
    }

    preOrderNode(node, operation) {
        if (node != null) {
            operation(node)
            this.preOrderNode(node.leftChild, operation)
            this.preOrderNode(node.rightChild, operation)
        }
    }

    inOrder() {
        this.inOrderNode(this._root, operation)

    }

    inOrderNode(node) {
        if (node != null) {
            operation(node)
            this.inOrderNode(node.leftChild, operation)
            this.inOrderNode(node.rightChild, operation)
        }

    }

    posOrder() {
        this.posOrderNode(this._root, operation)

    }

    posOrderNode() {
        if (node != null) {
            operation(node)
            this.posOrderNode(node.leftChild, operation)
            this.posOrderNode(node.rightChild, operation)
        }

    }

    sum() {
        return this.sumNodes(this._root)
    }

    sumNodes(node) {
        let sum = 0

        if (node) {
            sum = sum + node.key
            sum += this.sumNodes(node.leftChild)
            sum += this.sumNodes(node.rightChild)
        }

        return sum
    }
    
    size() {
        return this.sizeNodes(this._root)

    }

    sizeNodes(node) {
        let size = 0

        if (node) {
            size = size + 1
            size += this.sizeNodes(node.leftChild)

            size += this.sizeNodes(node.rightChild)
            
        }
    }

    minimum() {

    }

    minimumNode(node) {

    }

    maximum() {

    }

    maximumNode(node) {

    }

    breadthSearchFirst(operation) {
        let queue = []
        queue.push(this._root)

        while(queue.length > 0) {
            let node = queue.shift()
            operation(node)

            if (node.leftChild) {
                queue.push(node.leftChild)
            }
            if (node.rightChild) {
                queue.push(node.rightChild)
            }
        }
    }

    remove(key) {
        let founded = this.search(key)

        if (founded) {
            if (founded.isLeaf()) {
                if (founded.isRoot()) {
                    this._root = null
                } else {
                    let child = (founded.isLeftChild()) ? 'leftChild' : 'rightChild'
                    founded.parent[child] = null
                    founded.parent = null
                }
            } else if (founded.hasBothChildren()) {

            } else {

            }
        }
    }

}