class Node {
	constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.left = null;
      this.right = null;
      this.parent = null;
	}

   appendChild(node) {
      if (this.left === null) {
         this.left = node;
         this.left.parent = this;

         return;
      }

      if (this.left && this.right === null) {
         this.right = node;
         this.right.parent = this;

         return;
      }
	}

	removeChild(node) {
      if (this.right === node) {
         this.right = null;
         node.parent = null;

         return;
      }

      if (this.left === node) {
         this.left = null;
         node.parent = null;

         return;
      }

      if (this.right !== node && this.left !== node) {
         throw new Error();
      }
	}

   remove() {
      if (this.parent === null) {
         return;
      }

      this.parent.removeChild(this);
	}

	swapWithParent() {
      const child = this;
      const parent = this.parent;

      parent.left = child.left;
      parent.right = child.right;
      parent.parent = child.parent;

      this.parent = child;

      return;
	}
}

module.exports = Node;
