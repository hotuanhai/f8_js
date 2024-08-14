//1.var - let const : scope ,hoist
//var co hoisting (dua len dau)
if(true){
    var course = `js`
}
console.log(course)
var a= 1
for(let a =2;a<5;++a){
    console.log(a)
}
console.log(`hi `+ a)
//2 const vs var let
function add(a){
    for(let a =2;a<5;++a){
        console.log(a)
    }
    console.log(a)
}
add(1)

//arrow func
const logger = (logger) =>{
    console.log(logger)
}
logger(`message`)

let add1 = (a,b) => (a+b)
console.log(add1(2,7))