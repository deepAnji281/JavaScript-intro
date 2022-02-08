// array-> collection of same items in all the langauages
// array-> in javascript it can be all the collection of all datatypes
let arr=[];// array declaration
// array acessing element
let brr=["cars","fararri",null,true,3,3.4];
console.log(brr);
// accessing of the element
console.log(brr[3]);
//add element
brr[9]="hello";
console.log(brr);
// it means array in javascrpt treated as foulty array

// push element
brr.push("ram");
console.log(brr);
// pop element
brr.pop();
console.log(brr);
// shift -> it delete the element from first
brr.shift();
console.log(brr);
// unshift -> it will add the element at begining
brr.unshift(5);
console.log(brr);
// 2d array
let a=[[1,2,3],
      [4,5,6],
      [7,8,9]]
console.log(a[1][2]);      
