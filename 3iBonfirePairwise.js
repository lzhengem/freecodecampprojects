function pairwise(arr, arg) {
  //1. add each nums with all other nums
  //2. if num adds up to arg, turn get index of these 2 nums into a new array
  //3. change the value of these nums to undefined
  var indexes = [];
  for (var num in arr){
    for(var numToAdd in arr){
      if(num != numToAdd && arr[num] + arr[numToAdd] == arg){
        
        indexes.push(parseInt(num));
        indexes.push(parseInt(numToAdd));
        arr[num] = undefined;
        arr[numToAdd] = undefined;
      }
    }
  }

  var total = indexes.reduce(function(a,b){
    return a + b;

  }, 0); //0 is the initial value
  
  return total;
}

pairwise([1,2,3,6,7], 7);
