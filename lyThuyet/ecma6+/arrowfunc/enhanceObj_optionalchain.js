//Dn key-val,method cho obj
//Dn key cho obj duoi dang bien
var name = `js`
var price =100
var course = {
    name,
    price,
    getName(){
        return this.name
    }
}
console.log(course.getName())
var var1 = `name`
var var2 = `price`
var course = {
    [var1] : name,
    [var2] : price,
}
console.log(course)

//optional chaining
//kiem tra neu 1 key co ton tai hay ko
var char = {
    name: `alice`,
    cat:{
        name:`alicuuu`,
        cat2:{
            name:`alicuuu2`
        }
    },
    // getname(val){
    //     return val
    // }
}
if(char.cat?.cat2?.name) console.log(char.cat.cat2.name)
console.log(char.getname?.())


