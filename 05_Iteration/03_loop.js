// for of

const arr=[1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}

const greeting="hello maam"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
    
}

// maps

const map = new Map()
map.set('IN',"india")
map.set('USa',"Usa")
map.set('fr',"france")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,';',value);
     
}

const myObject={
    game1:'Ngf',
    game2:"radd"
}

// for (const [key,value] of myObject) {
//     console.log(key,';',value);
    
// }
