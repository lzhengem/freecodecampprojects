// 38 Bonfire: Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.

//this is very bad code, change it!
function add(num1,num2){
  if(typeof num1 !== 'number'){
    return undefined;
  }
  else if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
  }else if(typeof num2 === 'undefined'){
    
  return function(num3){
    if(typeof num1 === 'number' && typeof num3 === 'number'){
    return num1 + num3;
    }
    
  };
    
  }
  return undefined;
}
add(2,3);



//other solution

function add(num1,num2){
  if (typeof num1 !== 'number') return undefined;
  if (num2 && typeof num2 !== 'number') return undefined;

  function adder(b) {
    if (typeof b !== 'number') return undefined;
    return num1 + b;
  }
  
  return adder(num2) || adder;
}
add(2,3);
