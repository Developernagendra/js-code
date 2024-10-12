const user={
    username:"naggu",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        
    }

}

// console.log(this);


// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// user.username="ram"
// user.welcomeMessage()

// function chai(){
//     let username="naggu"
//     console.log(this.username);   
    
// }
// chai()

// const chai=function(){
//     let username="naggu"
//     console.log(this.username)
// }

const chai=()=>{
    let username="naggu"
    console.log(this)

}
//chai()


//  const addTwo=(num1,num2)=>{
//     return num1+num2
//  }
//   console.log(addTwo(3,4));
  
  // implict  return

  const addTwo=(num1,num2)=> num1+num2
  console.log(addTwo(2,3));

  




