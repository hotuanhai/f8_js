const name1 =`js`
var course = `course `+
                name1
console.log(course)
var course = `course ${name1}`
console.log(course)

var line = 'line1\nline2'
console.log(line)
var line =`line1
line2
line3`
console.log(line)
//class
// function Course(name,price){
//     this.name = name
//     this.price = price
// }
class Course{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    getName = function(){
        return this.name
    }
    
}
var jsCOurse =new Course(`js`,1000)
console.log(jsCOurse.getName())