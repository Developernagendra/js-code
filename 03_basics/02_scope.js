//var c=300

let a=300
if(true){
let a=19
const b=20

}

// console.log(a);
//console.log(b);
// console.log(c);

// nested scope 

function one(){
    const username="naggu"

    function two(){
        const website="youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username="naggu"
    if(username==="naggu"){
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website);
    
    
}
// console.log(username);

//++++++++++++++++++intresting+++++++++++++
console.log(addone(5))
function addone(num){
    return num+1

}

addTwo(5)
const addTwo=function(num){
    return num+2
}






