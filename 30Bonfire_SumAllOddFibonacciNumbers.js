//get all the finabacci numbers up to the given number
function fib(num){
  var fibnums = [1,1];
  var fib1 = 1;
  var fib2 = 1;
  var fib3;
  
  //while we hve not reached up to the number, add the next fib number to our array
  while(fib2 + fib1 <= num){ //make sure the last number is still less than or equal to given num
    fib3 = fib1 + fib2;
    fibnums.push(fib3);

    fib1 = fib2; 
    fib2 = fib3;    
  }
  return fibnums;

}

function sumFibs(num) {
  var fibnum = fib(num);
  var total = 0;
  //sum all odd numbers
  for (var number in fibnum){
    if(fibnum[number] % 2 !== 0){ //odd
      total += fibnum[number];
      
      
    }
    
  }
  return total;
}

sumFibs(10);
