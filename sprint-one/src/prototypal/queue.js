var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

queueMethods.dequeue = function() {
  var keyArray = Object.keys(this.storage);
  var deleted = keyArray[0];
  var data = this.storage[deleted];
  if (keyArray) {
    delete (this.storage[deleted]);
  }
  keyArray.shift();
  return data;
}

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}


