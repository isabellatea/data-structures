var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}

Stack.prototype.pop = function() {
  this.counter--;
  var deleted = this.storage[this.counter];
  if (deleted) {
    delete (this.storage[this.counter]);
  }
  return deleted;
}

Stack.prototype.size = function() {
  if (this.counter < 0) {
    return 0;
  }
  return this.counter;
}