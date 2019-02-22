const Node = require('./node');

class MaxHeap {
	constructor() {
      this.root = null;
      this.parentNodes = [];
	}

	push(data, priority) {
      this.insertNode(new Node(data, priority));
      this.shiftNodeUp(new Node(data, priority));
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
      return this.parentNodes.length;
	}

	isEmpty() {
      return this.parentNodes.length === 0;
	}

	clear() {
      this.root = null;
      this.parentNodes = [];
	}

   insertNode(node) {
      if (this.root === null) {
         this.root = this.parentNodes.push(node);
      }
      this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
      this.parentNodes.push(node);
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
