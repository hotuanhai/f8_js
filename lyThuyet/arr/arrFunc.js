var courses = [
    {
        id: 1,
        name: 'js',
        coin: 200
    },
    {
        id: 2,
        name: 'java',
        coin: 100
    },
    {
        id: 3,
        name: 'php',
        coin: 500
    },
    {
        id: 4,
        name: 'py',
        coin: 300
    }
]
//foreach each-val index
courses.forEach(function(course,index){
    console.log(index,course)
})
//every return boolean , kiem tra dieu kien , duyet lan luot
console.log(`every`)
var istrue = courses.every(function(course,index){
    console.log(index)
    return course.coin >100
})
console.log(istrue)
//some chi can 1kq tmdk
console.log(`some`)
var istrue = courses.some(function(course,index){
    console.log(index)
    return course.coin > 300
})
console.log(istrue)
//find
console.log(`find`)
var excist  = courses.find(function(course,index){
    console.log(index)
    return course.coin > 100
})
console.log(excist)
var excist  = courses.find(function(course,index){
    console.log(index)
    return course.coin > 1001
})
console.log(excist)
//filter findAll
var excist  = courses.filter(function(course,index){
    console.log(index)
    return course.coin > 100
})
console.log(excist)
//map duyet all phan tu 
// dugn de render view
console.log(`map`)
//C1
//   
//C2
var newCourses = courses.map(courseHandle)
function courseHandle(course,index){
    console.log(course)
    return {
        id: course.id,
        name: `new ${course.name} course`,
        coin: course.coin,
        price: `worth ${course.coin}`,
        index: index
    }
}
console.log(newCourses)
