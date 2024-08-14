//reduce
//chi tra ve 1kq duy nhat
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

function coinHandle(accumulator, currVal,currIndex,originArr){ //accumulator bien luu tru, curr obj, , course
    return accumulator + currVal.coin
}
var total = courses.reduce(coinHandle,0) //0 : init val
console.log(total)
//init val co the bo trong 1 so th
//init val cung kieu gt vs kq , neu k co init =>kq cung kieu gt vs ptu trong arr

//flaten arr
var arr= [1,2,[3,4],5,6,[7,8,9]]
var flatArr = arr.reduce(function(output,item){
    return output.concat(item)
},[])
console.log(flatArr)
console.log([].concat(1))

var html = courses.map(function(course,index){
    return `
        <div>
            <p>${course.name}</p>
            <p>${course.id}</p>
        </div>
    `
},[])
console.log(html.join(''))

//include
var str = `hello my friend`
console.log(str.includes(`my`,10))
var arr = ['js','java','css']
console.log(arr.includes(`js`,1))