//36 Bonfire: Binary Agents
// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  //split the string
  //figure out number from binary code
  //convert to char code
  str = str.split(" ");
  var char = "";
  var binarylength = 7;
  for(var zeros in str){
    var charCode = 0;
    for(var num in str[zeros]){
      charCode += parseInt(str[zeros][num]) * Math.pow(2, binarylength - num);
      
    }
    char += String.fromCharCode(charCode);
    
  }
  return char;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');