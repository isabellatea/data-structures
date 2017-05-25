var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    count: 0
  }
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

queueMethods.dequeue = function() {
  var keysArray = Object.keys(this.storage);
  var keyToDelete = keysArray[0];
  var data = this.storage[keyToDelete];
  if(keysArray.length > 0) {
    delete(this.storage[keyToDelete]);
  }
  keysArray.shift();
  return data;
}

queueMethods.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
}