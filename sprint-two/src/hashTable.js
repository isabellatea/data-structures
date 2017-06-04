var HashTable = function() {
  this._counter = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, value) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k,value]]);
    this._counter++;
  }
  var overwritten = false;
  if (!overwritten) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = value;
        overwritten = true;
      }
    }
  }
  if (!overwritten) {
    this._storage.get(index).push([k,value]);
    this._counter++;
  }
  if (this._counter > this._limit * .75) {
    this.resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   if (!this._storage.get(index)) {
     return undefined;
   }
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if(this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); //
  this._storage.get(index).splice(0, 1);
  this._counter--;
  if (this._counter < this._limit * .25) {
    this.resize(this._limit * .5);
  }
};

HashTable.prototype.resize = function(newMax) {
  var oldLimitValue = this._limit;
  var oldStorage = this._storage;
  this._limit = newMax;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  for(var i = 0; i < oldLimitValue; i++) {
    if(!oldStorage.get(i)) {
      continue;
    } else {
    for (var j = 0; j < oldStorage.get(i).length; j++){
      this.insert(oldStorage.get(i)[j][0], oldStorage.get(i)[j][1]);

      }
    }
  }
};

//**Time Complexity**
//insert: O(1)
//retrieve: O(1)
//remove: O(1)
//resize: O(1)