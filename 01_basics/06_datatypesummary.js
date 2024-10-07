//# primitive datatype
//7 types :string ,number,boolean,null,undefined,symbol,bigint

const score=100
const scoreValue=100.3

const isloggedin=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=345678765423456n


//reference type (non premitive)
// Array ,object,function

const heros=["love","is","dangerous"]

 let myobj={
    name:"naggu",
    age:22,
}

const myFunction =function(){
    console.log("hello word");
    
}


console.log(typeof myFunction);




