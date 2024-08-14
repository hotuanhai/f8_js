document.body.innerHTML = `
    <div class="box">
        <h1 id="head">DOM</h1>
        <h1 class="head">DOM</h1>
        <h1 class="head">DOM</h1>
        <form action="" id="form1"></form>
        <form action="" id="form2"></form>
        <a href="" name="yt">YT</a>
    </div>
    <div class="box1">
        <ul>
            <li>js</li>
            <li>php</li>
        </ul>
    </div>
    <div class="box2">
        <ul>
            <li>js2</li>
            <li>php2</li>
        </ul>
    </div>
`;

console.log(document)
document.write(`hello`)
hid= document.getElementById('head')
hclass = document.getElementsByClassName('head')
htag = document.getElementsByTagName('h1')
console.log(htag)
//css
console.log('css')
var node = document.querySelector('.box :nth-child(3)')
console.log(node)
var nodelist = document.querySelectorAll('.box .head')
console.log(nodelist)
// html collectio
console.log(`form`)
console.log(document.forms[`form1`])
console.log(document.anchors) // da cu, ko nen dung
console.log(document.getElementsByTagName('a'))

//get li
console.log(`li`)
var item = document.querySelectorAll('.box1 li')
console.log(item)

// getElementById querySelector tra ve truc tiep element
// querySelectorAll tra ve 1 nodelist
// getElementsByTagName getElementsByClassName tra ve 1 HTML collection
console.log(`bt`)
var heading = document.querySelector('#head')
console.log(heading)

// element - attribute - text