//xoa phan tu trung lap
var arr = ['a','b','c','a','c','c','a']
console.log([...(new Set(arr))])

//loop
var courses = ['css','js','py','java']
function loop(start,end,callback){
    if(start<= end){
        callback(start)
        loop(++start,end,callback)
    }
}

loop(0,courses.length-1,function(index){
    console.log(courses[i])
})