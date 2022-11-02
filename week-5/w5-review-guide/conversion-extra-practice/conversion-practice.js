//Convert the following: _HINT_: to be best prepared to do this on the test, create functions to do this.

//Hexadecimal to decimal:
function hexToDec(hexStr) {
  return parseInt(hexStr, 16)
}
console.log(hexToDec("309")); // => 777
/**************************** */

//Decimal to Binary:
//5687
function decToBin(decimal) {
  return decimal.toString(2)
}
console.log(decToBin(5687)); // => 1011000110111
/***************************** */

//Binary to Decimal:
//0b101101
function binToDec(binaryBlob) {
  return parseInt(binaryBlob, 2)
}
console.log(binToDec(101101)); // => 45
/****************************** */

//Decimal to Hexadecimal:
//13453
function decToHex(decimal) {
  return decimal.toString(16)
}
console.log(decToHex(13453)); // => 348d
/****************************** */

//Hexadecimal to ASCII:
function hexToASCII(hexStr) {
  let nums = []
  let ascii = ''
  for (let i = 0; i < hexStr.length; i+=2) {
    nums.push(hexStr[i] + hexStr[i+1])
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let dec = parseInt(num, 16);
    ascii += String.fromCharCode(dec)
  }
  return ascii;
}
console.log(hexToASCII("736F667477617265")); // => software
/******************************* */

//Binary to ASCII:
function binToASCII(binaryBlob) {
  let str = ''
  for (let i = 0; i < binaryBlob.length; i+=9) {
    let bin = binaryBlob.slice(i, i+8);
    let dec = parseInt(bin, 2);
    str += String.fromCharCode(dec);
  }
  return str;
}
console.log(
  binToASCII(
    "01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100"
  )
); // => javascript
/******************************** */

//ASCII to Binary:
//'appacademy'
function ASCIIToBin(ASCIIStr) {
  let str = '';
  for (let i = 0; i < ASCIIStr.length; i++) {
    let dec = ASCIIStr.charCodeAt(i);
    let bin = dec.toString(2);
    // console.log(bin);
    let split = bin.split('')
    // console.log(split)
    if (split.length !== 8) {
      split.unshift(0)
    }
      // console.log(split.join(''))
      str += split.join('')
    }
    return str
  }

//   function ASCIIToBin(ASCIIStr) {
//     let newStr = "";
//     for (let letter of ASCIIStr){
//       let asciiToBinary = letter.charCodeAt(letter).toString(2);
//       // ASCII to Decimal(10) to Binary(2)
//       newStr += `0${asciiToBinary}`
//       ;
//     }
//     return newStr;
// }

console.log(ASCIIToBin("appacademy")); // => 01100001011100000111000001100001011000110110000101100100011001010110110101111001
/********************************* */

//ASCII to Hexadecimal:
//'badger'
function ASCIIToHex(ASCIIStr) {
  let newStr = ''
  for (let i = 0; i < ASCIIStr.length; i += 1) {
    let bin = ASCIIStr.charCodeAt(i);
    let hex = bin.toString(16)
    newStr += hex;
  }
  return newStr;
}

// function ASCIIToHex(ASCIIStr) {
//   let newStr = "";
//   for (let i = 0; i < ASCIIStr.length; i++){
//     let letter = ASCIIStr[i];
//     let asciiToHex = letter.charCodeAt(letter).toString(16);
//     // ASCII to Decimal(10) to Hex(16);
//     newStr += asciiToHex;
//   }
//   return newStr;

console.log(ASCIIToHex("badger")); // => 626164676572
