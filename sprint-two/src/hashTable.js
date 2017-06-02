var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, value) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  var overwritten = false;

  if (!overwritten) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = value;
        overwritten = true;
      }
    }
  }

  if (!overwritten) {
    this._storage[index].push([k, value]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert: O(1) but O(n) at worse
//retrieve: O(1) but O(n) at worse
//remove: O(1) but O(n) at worse
