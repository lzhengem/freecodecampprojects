function orbitalPeriod(arr) {
// formula = T = 2 * Pi * ((eartRadius + avgAlt)**3 / GM)**1/2
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var output = [];
  var spacething = function(obj){
    obj.orbitalPeriod = Math.round(2 * Math.PI * Math.pow((Math.pow(earthRadius + obj.avgAlt,3) / GM), 1/2));
    delete obj.avgAlt;
    return obj;
  };
  for (var object in arr){
    output.push(spacething(arr[object]));
  }
  

  
  return output;