var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  } else {
    var array = this.children;
    var checkVal = function(array, target) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].value === target) {
          result = true;
        } else {
          checkVal(array[i].children, target);
        }
      }
    };
  }
  checkVal(array, target);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 //.addChild: O(1) constant
 //.contains: O(n) linear