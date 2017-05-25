var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods); // {}
  someInstance.storage = {};
  someInstance.counter = 0;

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
  if (deleted) {
    delete (this.storage[this.counter]); // sum 1+2 , sum(1,2)
  }
  return deleted;
}

stackMethods.size = function() {
  if (this.counter < 0) {
    return 0;
  }
  return this.counter;
}