const Node = require("./node");

class MaxHeap {
   constructor() {
      this.root = null;
      this.parentNodes = [];
   }

   push(data, priority) {
      const node = new Node(data, priority);

      this.insertNode(node);
      this.shiftNodeUp(node);
   }

   pop() {}

   detachRoot() {
      const detachedRoot = this.root;
      const rootIndex = this.parentNodes.findIndex(el => el === detachedRoot);

      if (rootIndex !== -1) {
         this.parentNodes.splice(rootIndex, 1);
      }

      this.root = null;

      return detachedRoot;
   }

   restoreRootFromLastInsertedNode(detached) {}

   size() {
      return this.parentNodes.length;
   }

   isEmpty() {
      return this.size() === 0;
   }

   clear() {
      this.root = null;
      this.parentNodes = [];
   }

   insertNode(node) {
      if (this.isEmpty()) {
         this.root = node;
      }

      // if (this.root === null) {
      //    this.root = node;
      // } else {
      //    this.parentNodes[0].appendChild(node);

      //    if (this.parentNodes[0].left && this.parentNodes[0].right) {
      //       this.parentNodes.shift();
      //    }
      // }

      this.parentNodes.push(node);
   }

   shiftNodeUp(node) {
      this.parentNodes.push(node);
   }

   shiftNodeDown(node) {}
}

module.exports = MaxHeap;
