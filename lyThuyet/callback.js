// la ham truyen qua doi so
function myFunc(param){
    if(typeof param === 'function'){
        param(4)
    }
}
function callbackFunc(val){
    console.log(`val: ${val}`)
}
callbackFunc(1)
myFunc(callbackFunc)

var courses = ['css','js','py','java']
var html = courses.map(a => `<h2> ${a} </h2>`)
html = html.join('')
console.log(html)

Array.prototype.map2 = function (callback){
    var arr = []
    arrlen = this.length
    for(let i =0  ; i < arrlen; ++i){
        var result = callback(this[i],i )
        arr.push(result)
    }
    return arr
}
var html = courses.map2(function(course,index){
    // console.log(course,index)
    return `<h2> ${course} </h2>`
})

console.log(html)