var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  }

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}

stackMethods.pop = function() {
  this.counter--;
  var deleted = this.storage[this.counter];
  if(this.counter > 0) {
    delete(this.storage[this.counter]);
  }
  return deleted;
}

stackMethods.size = function() {
  if(this.counter < 0) {
    return 0;
  }
  return this.counter;
}