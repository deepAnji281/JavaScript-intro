// object is key value pair in javascript
// object is declare as
let obj={};
// key_value terms
let person={
    name:'deepak',
    age:'21',
    contact:"9519677026",
    height:'6feet',
    gender:'male'
}
// car- name,brand,max_speed,price
let car={
    name:"farari",
    maxSpeed:300,
    brand:'mahindra',
    price:"40L"
}

// captian_America ,Avenger

let cap={
    FirstName:"Steve",
    LastName:"Rogers",
    Age:102,
    IsAvanger:true,
    Friends:['Buky',"Tonny","Dr.banner"],
    Address:{

        State:"Mahnaten",
        City:"New Yark"
    },
    sayHi:function(){
        console.log("captian Say Hi");
    }
}
// accessing the key pair element
// dot Notation
console.log(cap.FirstName);
console.log(cap.LastName)
// breaket notation
console.log("My best Friend is",cap['Friends'][0]);
console.log(cap["Age"]);
console.log(cap["Address"]["City"]);
// function calling
cap.sayHi();
// for in loop 
for(let key in cap)
{
    console.log("key",key,"value:",cap[key]);
}

cap.Friends[0]="thor";
console.log(cap.Friends[0]);

