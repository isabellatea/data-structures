var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode =  new Node(value);

    if(!list.head) {
      list.head = newNode;
    }
    var currentTail = list.tail;
    if (currentTail) {
      currentTail.next = newNode;
    }
      list.tail = newNode;
    // if (list.head = null){
    //   list.head = newNode;
    // }
  };

  list.removeHead = function() {

    var oldHead = list.head.value;
    list.head = list.head.next;


    return oldHead;
  };

  list.contains = function(target, node) {
    // search from head to tail for the target
    if (!node){
      node = list.head;
    }
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var LL = new LinkedList();

LL.addToTail(4);
LL.addToTail(5);
//LL.contains(5);

console.log(LL.contains(5)); // true