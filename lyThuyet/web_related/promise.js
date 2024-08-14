// // async
// //settimeout setinterval fetch xmlReq
// setTimeout(function(){
//     console.log(1)
// },1000)
// console.log(2)
// //sync
// //callback hell, pyramid of doom
// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//         },1000)
//     },1000)
// },1000)

//promise de xu ly async ,sd thay callback
//pending , fulfilled, reject
var promise = new Promise(//executor
    function(resolve, reject){ //succ resolve(), fail: reject()
    //luon fai goi 1 trong 2 -> ko bi err
    resolve(123)
})
// promise
//     .then(function(num){
//         console.log(`succ`)
//         console.log(num)
//     }) // resolve()
//     .catch(function(){
//         console.log(`fail`)
//     })  //reject()
//     .finally(function(){
//         console.log(`alway`)
//     }) //always

//promise chain  xu li callback hell
//data is the prev return value
promise
    .then(function(num){
        console.log(`succ`)
        console.log(num)
        //return num+1
        return new Promise(function(resolve){
            setTimeout(function(){ resolve([1, 2, 3]) }, 3000);
        })
    }) // resolve()
    .then(function(num){
        console.log(`succ`)
        console.log(num)
        return num+1
    }) 
    .then(function(num){
        console.log(`succ`)
        console.log(num)
    }) 
    .catch(function(){
        console.log(`fail`)
    })  //reject()
    .finally(function(){
        console.log(`alway`)
    }) //always
//example
var promise = new Promise(
    function(resolve, reject){
    resolve(1)
})
function sleep(ms,num){    
    console.log(num)
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(num+1) 
        }, ms);
    })
}
promise
    .then(function(num){
        return sleep(3000,num)
        })
    .then(function(num){
        return sleep(3000,num)
        })
    .then(function(num){
        return sleep(3000,num)
        })
    