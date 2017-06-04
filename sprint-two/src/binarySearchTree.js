var BinarySearchTree = function(val) {
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);
  newBinarySearchTree.value = val;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  return newBinarySearchTree;
};


BinarySearchTree.prototype.insert = function(val) {
  if (typeof val !== "number") {
    return 'Input not a number';
  }

  if (val < this.value && !this.left) {
    this.left = BinarySearchTree(val);
  }

  if (val < this.value && this.left) {
    this.left.insert(val);
  }

  if (val > this.value && !this.right) {
    this.right = BinarySearchTree(val);
  }

  if (val > this.value && this.right) {
    this.right.insert(val);
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  }
  if (val < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(val);
  }
  if (val > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(val);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert: O(log(n))
//contains: O(log(n))
//depthFirstLog: O(n)