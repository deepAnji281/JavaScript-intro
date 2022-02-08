// strings->set of character or sequence of character
let str="pepcoders"
console.log(str);
// length property
console.log(str.length);
// extraction method
// 1)slice method
let slicedString=str.slice(3,7);
console.log(slicedString);
// 2) substring method
let subStringStr=str.substr(6,10)
console.log(subStringStr);
// uppercase 
str.toUpperCase("pepcoders");
console.log(str);
// 4)lowercase
str.toLowerCase("pepcoders");
console.log(str);
// replacement method
let sayHello="Hello Amit"
let replaceBye=sayHello.replace("hello","bye");
console.log(replaceBye);
// concat element
let str1="Ram"
let str2="sita";
let concatestr=str1.concat("weds",str2)
console.log(concatestr);
