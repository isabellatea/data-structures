var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function() {
  var keyArray = Object.keys(this.storage);
  var data = this.storage[keyArray[0]];
  if(keyArray.length > 0) {
    delete(this.storage[keyArray[0]]);
  }
  keyArray.shift();
  return data;
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}