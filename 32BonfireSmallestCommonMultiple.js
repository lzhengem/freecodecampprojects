//Bonfire: Smallest Common Multiple

//Find the smallest number that is evenly divisible by all numbers in the provided range.

function smallestCommons(arr) {
  arr = arr.sort();
  var range = [];
  var multiple = 1;
  
  
  for (var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }
  //for each number in range, starting from last number
  for(var j = 1; j <= range.length; j++){
    
    //check to see if this number is divible by anything else in range
    for(var k = 0; k < range.length - 1; k++){
      if(range[range.length - j] > range[k] && range[range.length - j] % range[k] === 0){
        range.splice(range.indexOf(range[k]), 1);
        
      }
    }
  }

  //multiply everything in array
  for(var num in range){
    multiple *= range[num];
  }
    

  
  return multiple;
}


smallestCommons([1,5]);
