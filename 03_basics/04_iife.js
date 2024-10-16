// immediately invoked qfunction expression(IIFE)

(function chai(){
    console.log(`Db Connection`);
    
})();

( (name)=>{
    console.log(`db connection two${name}`);
})('naggu')