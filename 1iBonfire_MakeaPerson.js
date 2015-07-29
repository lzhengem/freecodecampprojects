/*Intermediate 1 Bonfire: Make a Person
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.*/

var Person = function(firstAndLast) {
  var name = firstAndLast.split(" ");
  //Can also use name = firstAndLast.match(/\w+/g);
  this.getFullName = function(){
    return name;
    
  };
  this.setFirstName = function(first){
    name[0] = first;
    
  };
  this.getFirstName = function(){
    return name[0];};
  
  this.setLastName = function(last){
    name[1] = last;
    
  };
  this.getLastName = function(){
    return name[1];
    
  };
  this.setFullName = function(firstAndLast){
    name = firstAndLast.split(" ");
    
  };
  this.getFullName = function(){
    return name.join(" ");
    
  };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
