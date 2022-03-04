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