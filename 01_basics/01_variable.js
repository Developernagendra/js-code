const accountId=12356
let accountEmail="aman@gmail.com"
var accountPassword="1234"
let accountCity="delhi"
let accountState;


//accountId=2 //not allowed

accountEmail="radha@gmail.com"
accountPassword="123456"
accountCity="bangalore"

console.log(accountId);

/* 
prefere not to use var
because of issue in block scope and function scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

