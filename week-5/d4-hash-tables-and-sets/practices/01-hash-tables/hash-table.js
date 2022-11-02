const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashedKey = sha256(key);
    let newHash = hashedKey.slice(0, 8);
    return parseInt(newHash, 16);
  }

  hashMod(key) {
    return this.hash(key) % this.data.length;
  }

  insertNoCollisions(key, value) {
    const idx = this.hashMod(key);

    if (this.data[idx])
      throw Error("hash collision or same key/value pair already exists!");
    else {
      this.data[idx] = new KeyValuePair(key, value);
    }
    this.count++;
  }
  //every instance in the keyvaluepair also has a next property.
  insertWithHashCollisions(key, value) {
    const idex = this.hashMod(key);
    let old = new KeyValuePair(key, value);

    if (this.data[idex]) {
      old.next = this.data[idex];
      this.data[idex] = old;
    } else {
      this.data[idex] = old;
    }
    this.count++;
    //short method shane
    // if(this.data[idex]) old.next = this.data[idex]
    // this.data[idex] = old;
    // this.count++
  }

  insert(key, value) {
    const idex = this.hashMod(key);
    let old = new KeyValuePair(key, value);

    if (this.data[idex]) {
      //if same index exists

      let curr = this.data[idex];
      while (curr && curr.key !== key) {
        curr = curr.next;
      }
      if (curr) {
        curr.value = value;
      } else {
        old.next = this.data[idex];
        this.data[idex] = old;
        this.count++;
      }
    } else {
      this.data[idex] = old;
      this.count++;
    }
  }
}

// hashTable = new HashTable(2);
// hashTable.insertWithHashCollisions("key-1", "val-1");
// hashTable.insertWithHashCollisions("key-2", "val-2");
// hashTable.insertWithHashCollisions("key-3", "val-3");
// console.log(hashTable);

module.exports = HashTable;
