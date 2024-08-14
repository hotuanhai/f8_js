// function wirr(m1,m2){
//     if(m1 || m1 instanceof Number) console.log(m1)
//     if(m2) console.log(m2)
// }

// wirr('qq','hh')
// wirr(0,'hh')

// console.log( 1 instanceof Number)
// console.log( 0 instanceof Number)
// console.log( typeof 0 === 'number')

// // argument la default, 1 mang chua tat ca parameter
// function write(){
//     let arr=``
//     console.log(Array.isArray(arguments))
//     for( let i of arguments){
//         console.log(i)
//         arr+= `${i} - `
//     }
//     console.log(arr)
// }
// write('a','b','c','d')

function a1(){
    console.log(`hiii`)
}
function a1(a){
    console.log(`hi ${a}`)
}
a1()
a1('hello')