//Solution #1
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var oldestKey = 0;
  var newestKey = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestKey] = value;
    newestKey++;
  };

  someInstance.dequeue = function() {
    var deleted = storage[oldestKey];
    delete storage[oldestKey];
    if (deleted) {
      oldestKey++;
    };
    return deleted;

  };

  someInstance.size = function() {
    if (newestKey >= oldestKey) {
      return newestKey - oldestKey;
    }
    return 0;
  };
  return someInstance;
};


//Solution 2
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var keysArr = Object.keys(storage);
    var indexToDelete = 0;
    if(keysArr.length < 1) {
      return 0;
    }
    var keyToDelete = keysArr[indexToDelete];
    var toDelete = storage[keyToDelete];
    delete(storage[keyToDelete]);
    keysArr.shift();
    return toDelete;
  };

  someInstance.size = function() {
    var objLen = Object.keys(storage).length;
    return objLen;
  };

  return someInstance;
};