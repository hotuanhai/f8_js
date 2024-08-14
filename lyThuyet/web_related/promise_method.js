// function sleep(ms){
//     return new Promise(function(resolve,reject){
//         setTimeout(resolve,ms)
//     })
// }
// sleep(3000)
//     .then(function(){
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function(){
//         console.log(2)
//         return  new Promise(function(resolve,reject){
//             reject(`err`)
//         })
//     })
//     .then(function(){
//         console.log(3)
//         return sleep(1000)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
//1 promise.resolve 
//2 promise.reject
//3 promise.all
var promise = Promise.resolve(`succ`)
promise
    .then(function(data){
        console.log(`data ` + data)
    })
    .catch(function(data){
        console.log(`err ` + data)
    })
//all ket hop 2 promise chay song song
var promise1 = new Promise(
    function(resolve, reject){
        setTimeout(function(){
            resolve([1])
        },2000)
})
var promise2 = new Promise(
    function(resolve, reject){
        setTimeout(function(){
            resolve([2,3])
        },4000)
})

//tat ca promise deu phai resolve
Promise.all([promise1,promise2]) //nhan 1 arr
    .then(function(data){
        console.log(data)
    })
    
var promise3= new Promise(
    function(resolve, reject){
        setTimeout(function(){
            reject(`err`)
        },4000)
})
Promise.all([promise1,promise3]) //nhan 1 arr
    .then(function(data){
       console.log(data)
})
    .catch(function(data){
        console.log(data)
    })