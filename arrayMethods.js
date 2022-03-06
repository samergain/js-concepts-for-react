//The following array methods are frequently used in REACT
//map, filter, reduce, find, includes

///////////MAP/////////
//This method creates a new array with the results of calling a provided function on every element in this array.
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(element => element+1)
console.log("after mapping:", mappedArr);
console.log("original array:", arr);

///////////FILTER/////////
//This method creates a new array with only elements that passes the condition inside the provided function.
let arr1 = [1, 2, 3, 4, 5];
let filteredArr1 = arr.filter(element => (element===1 || element>4))
console.log("after filtering:", filteredArr1);
console.log("original array:", arr1);

///////////INCLUDES///////
//array.includes(value, starting_index) will return true if the 'value' is found in the array from 'starting_index' till the end of the array
let array1 = [1,2,3,4,5];
console.log(array1.includes(2,3)); //false
console.log(array1.includes(3,2)); //true
console.log(array1.includes(1));   //true

//case: array of objects
let array2 = [{id: 1},{id: 2},{id: 3}]
console.log('includes object?: ', array2.includes({id:1})); //false; because each object has it's own reference in memory
//explanation:
var x = 2;
var z = x; //with primitive types, this line creates a copy of x and assigns it to z.
console.log('x === z ?', (x === z)); //true
x = 5;
console.log('z is now:', z, ' and x is: ', x); //z is still 2 because it's a copy not a pointer to the value of x
let x1 = {id: 1};
let z1 = {id: 1};
console.log('x1 === z1 ?', (x1 === z1)); //false because objects reserve their own reference in memory even if their value is matching other objects
let y1 = x1; //now y1 is pointing to the same reference in memory as x1 and therefore y1 === x1 and if we update the value of x1 then y1 will be changed as well.
console.log('y1 === x1 ?', (y1 === x1)); //true
x1.id = 15; //y1 is still pointing to the same value as x1
console.log('y1:', y1, ' x1: ', x1)
console.log('y1 === x1 ?', (y1 === x1)); //true

//to use includes with objects:
let o1 = {id: 1};
let o2 = {id: 2};
let o3 = {id: 3};
let arrayObj = [o1, o2, o3];
console.log(arrayObj.includes(o2)); //true, while line 27 is false!

///////////FIND///////////

///////////REDUCE/////////