//practice
var arr = [1,2,3,4,5]
var sum = arr.reduce(function(total,cur,index,arr){
    return total + cur
},0)
console.log(sum)

Array.prototype.reduce2 = function(callback,result){
    if(!result) result = 0
    for (let index = 0; index < this.length; index++) {
        result = callback(result,this[index],index,this)   
    }
    return result
}
var sum = arr.reduce2(function(total,cur,index,arr){
    return total + cur
},0)
console.log(sum)
var sum = arr.reduce2(function(total,cur,index,arr){
    return total + cur
})
console.log(sum)

