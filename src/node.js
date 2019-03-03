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
      if (this.left === node) {
         this.left.parent = null;
         this.left = null;

         return;
      }

      if (this.right === node) {
         this.right.parent = null;
         this.right = null;

         return;
      }

      if (this.right !== node && this.left !== node) {
         throw new Error();
      }
   }

   remove() {
      if (this.parent !== null) {
         this.parent.removeChild(this);
      }
   }

   swapWithParent() {
      if (!this.parent) {
         return;
      }

      const isRightChild = this.parent.right === this;

      const [parent, grandparent] = [this.parent, this.parent.parent];

      let copyChildLeft = this.left,
         copyChildRight = this.right;

      if (grandparent) {
         if (grandparent.left === parent) {
            grandparent.left = this;
         } else {
            grandparent.right = this;
         }
      }

      if (isRightChild) {
         this.parent.left.parent = this;
      }

      this.parent.parent = this;
      this.left = this.parent;
      this.right = this.parent.right;

      this.parent.left = copyChildLeft;
      this.parent.right = copyChildRight;
      this.parent = grandparent;

      return;
   }
}

module.exports = Node;
