// 35 Bonfire: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  var output = [];
  var itemToAdd;
  
  for(var item in arr){ 
    if(Array.isArray(arr[item])){ //if given arr contains nested arrays, use recursion to get to lowest level
       var mynums = steamroller(arr[item]); // since steamroller returns an array, input each value individually
        for (var num in mynums){ // once at the lowest level, push item into our output array
          output.push(mynums[num]);
        }
    }else{ // if the item is not an array, just directly push it into our output array
      itemToAdd = arr[item]; 
      output.push(itemToAdd);
    }
  }
  
  
  return output;
  
}

steamroller([[['a']], [['b']]]);