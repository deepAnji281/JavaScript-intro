// // function in java script
// // function body can be define function function_name(){}
// function sayHi() {
//     console.log('hi');
// }
// sayHi();
// // function parameter
// function add(a,b)
// {
//     console.log(a+b);
// }
// // function argument
// add(2,3);

// // function in javascript are known as first_citizen
// // any language first_citizen is variable
// // first_citizen means function can be treated as variable
// let multiply=function(a,b)
// {
//     console.log(a*b);

// }
// multiply(7,5)

// // advantage of writing as  variable is we can not call before function_definition
// let div=function(a,b)
// {
//     console.log(a/b);
// }
// div(6,3);

// // function hoisting
// division(8,4);
// function division(a,b)
// {
//     console.log(a/b);
// }


// Division(9,3);
// let Division=function(a,b)
// {
//     console.log(a/b);
// }

//------------><---------------------------------------------
// IIFE(imediate invoke function Expression)
let add=(function(a,b)
{
    console.log(a+b)
})(2,3);