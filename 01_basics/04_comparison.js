console.log("2" > 1)
console.log("02" > 1)

// console.log(null > 0);false
// console.log(null == 0);false
// console.log(null >=0);true

//The reason is that an equality check == and comparison > < >= <= work differently .
//Comparisons convert null to a number , treating it as 0.
//That's why (3)null >=0 is true and (1)null>0 is false.

//same problem will come with undefined it will always give false
//In javascript comparison and equality check works diffrently

//=== also checks value as well as datatype

