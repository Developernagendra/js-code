
function sayMyName(){
    console.log("N")
    console.log("N")
    console.log("N")
  
}

//sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
//    let result=number1+number2
//    return result
return number1+number2
}
const result=addTwoNumber(3,4)

// console.log("result",result);


function loginUserMessage(username="amm"){

    if(! username){
        console.log("please enter a user name");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("naggu"))

// console.log(loginUserMessage());

//... rest operator to pass multiple value 

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,234,45,788,));

const user={
    username:"naggu",
    price:200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username:"naggu",
    price:200
})

const myNewArray=[200,300,688,4456]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
