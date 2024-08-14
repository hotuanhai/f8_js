// element - attribute - text
// document.body.innerHTML =`

// `

//k co trog src code , do chinhr = js
var ele = document.querySelector(`h1`)
console.log(ele)
//them
//C1 sd setter(sd ham co san)
ele.title = `heading`
ele.className = `class1`
//C2 bruteforce
ele.setAttribute('hello','test')

console.log(ele.getAttribute(`class`))
console.log(ele.className)

//text 
//innertext : 1 thuoc tinh cua element node
//textcontent: 1 thuoc tinh cua element va text node
console.log(ele.textContent) //get all content
console.log(ele.innerText) // just get text
ele.innerText=`
    new
    heading
`
console.log(ele.textContent)

//add element
//innerHTML tra ve cac tag ben trong no
//outerHTML tra ve cac tag ben trong no va chinh no
var box =document.querySelector(`.box`)
box.innerHTML =`<h1 title="heading">heading</h1>`;
console.log(document.querySelector(`.box h1`))
console.log(typeof box.innerHTML)
console.log( box.innerHTML)
console.log( box.outerHTML)