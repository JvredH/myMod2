function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (typeof number === 'number') {
    if (number % 2 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    throw new Error();
  }
}

function myRange(min, max, step = 1) {
  let newArray = []
  // if (step === undefined) {
  //   step = 1;
  //   for (let i = min; i <= max; i += step) {
  //     newArray.push(i);
  //   }
  //   return newArray;
  // } else {
    for (let i = min; i <= max; i += step) {
      newArray.push(i);
    }
    return newArray;
  }
// }


module.exports = { isFive, isOdd, myRange };
