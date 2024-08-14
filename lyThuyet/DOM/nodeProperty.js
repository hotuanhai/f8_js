var box = document.querySelector(`.box`)
console.log([box])
console.log(box.nodeType)
//tab index : thu tu khi an tab

//DOM style
console.log(box.style.width)
box.style.backgroundColor = `yellow`
Object.assign(box.style,{
    width: `200px`,
    backgroundColor: `blue`
}) // hop nhat 2 bien
console.log(box.style.width)

//class list  qly class cua element
console.log(`class list`)
//add 
box.classList.add('red','yellow')
//contains ktra element chua 1 class k
console.log(box.classList.contains(`yellow`))
//remove
setTimeout(()=>{
    box.classList.remove(`yellow`)
},3000)

//toggle co-> xoa , k co-> them
setInterval(()=>{
    box.classList.toggle(`yellow`)
},3000)

console.log(box.classList)
