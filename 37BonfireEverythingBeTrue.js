// 37 Bonfire: Everything Be True
//Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
function every(collection, pre) {
  // Does everyone have one of these?
  var key = pre;
  if(typeof pre === 'object'){
    //if getting object for pre, convert it to the string
    key = Object.getOwnPropertyNames(pre)[0];
  }
  for(var item in collection){
    if (!collection[item].hasOwnProperty(key)){
      return false; 
    }else if(pre[key]){ //if there is a key : value to be checked
      if(collection[item][key] !== pre[key]){
        return false;
      }
      
      
    }
  }
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
