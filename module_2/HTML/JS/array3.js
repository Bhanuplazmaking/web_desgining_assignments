let nos=[1, 2, 3, 4, 5];
console.log("the initial array is :",nos)
//shift method
nos.shift()
let fno=nos.shift();
console.log("Array after shift:",nos);
console.log("The no got shifted:",fno);
//unshift
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1, 2, 3, 4, 5];
nums.splice(4,1);
console.log("The no after splice:",nums);