//1,default param value
function logger(log){
    if(typeof log === `undefined`) log = `default val`
    console.log(log)
}
logger()
function logger(log = `default val`){
    console.log(log)
}
logger()
//2destructuring: phân rã
// rest cho dstructuring , or sd trong dinh nghia tham so
var arr =[`js`,`php`,`css`]
var [a, ,c] = arr
console.log(a,c)
var [a,...rest] = arr
console.log(a)
console.log(rest)
var course ={
    name: `js`,
    price: 1000,
    img: ` cat`,
    miniCourse:{
       name: `node`
    }
}
var {name, ...newCourse} = course
console.log(name)
console.log(newCourse)
var {name: parentName, miniCourse:{name: childname}, description =`hello`} = course
console.log(parentName)
console.log(childname)
console.log(description)

// dinh nghia tham so 
//param is arr
function logger(...param){
    console.log(param)
    console.log(...param)
}
logger(1,2,3,4)

//spread
//sd de bo di cap () {} []...
var arr = [`js`,`php`,`css`]
var arr2 = [`html`,'java']
var arr3=[...arr2,...arr]
console.log(arr3)

var obj1 = {
    name: `js`
}
var obj2 = {
    price: 200
}
var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)

function logger(a,b){
    console.log(a ,b)
}
logger(...arr2)

//tagged template literal
function highlight([first,...str],...vals){
    console.log(first)
    console.log(str)
    console.log(vals)
    return vals.reduce(
        (accu, curr) => [...accu,`<span>${curr}</span>`,str.shift()],
        [first]
    )
}
var name =`f8`
var course =`js`
var html = highlight`code ${course} tai ${name}`
console.log(html)
