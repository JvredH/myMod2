class DynamicArray {

  constructor(capacity=4) {

    this.capacity = capacity;
    this.data  = new Array(this.capacity);
    this.length = 0;
    // console.log(this.length);
  }

  read(index) {

    if (index >= this.length) {
      return undefined;
    }

    return this.data[index];
  }

  unshift(val) {

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }


  // -> 0 [0, 1, 2, 3, 4]
}

const arr = new DynamicArray(8);




module.exports = DynamicArray;
