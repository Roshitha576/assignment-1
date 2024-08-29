//create variables
var firstName = "Rio";  
let lastName = "Doe";    
const age = 18;          

console.log(firstName);  
console.log(lastName);   
console.log(age);  

//variable scope
var globalVar = "I am global";  
function outerFunction() {
    let localVar = "I am local"; 
    var funcVar = "Function scope var"; 
    console.log(globalVar);  
    console.log(localVar);   

    function innerFunction() {
        let innerVar = "I am inner local";
        console.log(funcVar);  
        console.log(innerVar);  
    }
    innerFunction();
}
outerFunction();

//operators
//arthemetic operators
let x = 6;
let y = 5;
console.log(x + y);  
console.log(x - y);  
console.log(x * y);  
console.log(x / y);  
console.log(x % y);  
console.log((x + y) * (x - y));  

//comparison operators
console.log(x == y);   
console.log(x != y);   
console.log(x === y);  
console.log(x !== y);  
console.log(x < y);    
console.log(x > y);    
console.log(x <= y);   
console.log(x >= y);   

//logical operators
let a = true;
    let b = false;
    console.log(a && b);  
    console.log(a || b);  
    console.log(!a); 
    
//Data types
//primitive data types
let num = 42;           
let str = "Hello";      
let bool = true;        
let empty = null;       
let notDefined;         
console.log(typeof num);      
console.log(typeof str);      
console.log(typeof bool);     
console.log(typeof empty);    
console.log(typeof notDefined); 

//object datatype
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    greet: function() {
        console.log("Hello, " + this.firstName);
    }
};
console.log(person.firstName);  
person.age = 26;                
console.log(person.age);        
person.greet();    

//Type Conversion and Coercion
//Explicit type conversion
let numStr = "123";
console.log(Number(numStr));   
let boolValue = 1;
console.log(Boolean(boolValue));  
let numVal = 456;
console.log(String(numVal));    

//Implicit type coercion
console.log("5" + 2);  
console.log("5" - 2);  
console.log(true + 1); 

//Strings and Template Literals
//String manipulation
let greeting = "Hello";
let name = "World";
console.log(greeting + " " + name); 
console.log(name[1]);               
console.log(name.length);           
console.log(name.substring(1, 3));  

//Template literals
let age = 25;
let message = I am ${age} years old;
console.log(message);  
let multiLine = This is a 
multi-line string;
console.log(multiLine);

//Decision Making Statements
//If-else statements
let score = 75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
  console.log("C");  
}

//Switch statements
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana selected");
        break;
    case "apple":
        console.log("Apple selected");  // Output: Apple selected
        break;
    default:
        console.log("No fruit selected");
}

//Use Strict
"use strict";

function strictExample() {
    undeclaredVar = 10;  
}
strictExample();

//Function Call and Its Definition
//Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); 

//Function expression
let multiply = function(x, y) {
    return x * y;
};
console.log(multiply(3, 4));  

//Passing Parameters to Functions
//Passing arguments
function greet(name, greeting = "Hello") {
    console.log(greeting + ", " + name);
}
greet("John");             
greet("Jane", "Hi");

//Default parameters
function subtract(x, y = 5) {
    return x - y;
}
console.log(subtract(10));  

//Return Statement
//Returning values
function square(x) {
    return x * x;
}
let result = square(4);
console.log(result);  

//Chaining function calls
function double(x) {
    return x * 2;
}
function addFive(x) {
    return x + 5;
}
let finalResult = addFive(double(3)); 
console.log(finalResult);  










    





