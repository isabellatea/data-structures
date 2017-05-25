var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};
  var counter = 0;

  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    counter--;
    var deleted = storage[counter];
    if(Object.keys(someInstance).length > 0) {
      delete(storage[counter]);
    }
    return deleted;
  };

  someInstance.size = function() {
    if(counter < 0) {
      return 0;
    }
    return counter;
  };
  return someInstance;
};