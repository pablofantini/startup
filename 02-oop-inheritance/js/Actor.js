'use strict';

var Actor = function (firstName, lastName, age) {
  var firstName = firstName;
  var lastName = lastName;
  var age = age;
  
  this.getName = function(){
    return firstName + ' ' + lastName;
  }
  
  this.getAge = function(){
    return age;  
  }
}