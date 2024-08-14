//1 ATTRIBUTE EVENT
// anh huong den tat ca element con va chinh no
// su kien noi bot ; n ONCLICK (xay ra tu the cha)


//2 using element node  
var h1e = document.querySelectorAll(`.box`)
console.log(h1e)
for(let i = 0; i < h1e.length;i++){
    h1e[i].onclick = function(e){
        console.log(e.target)
    }
}

// 3 input/select
var val
var textin = document.querySelector(`input[type="text"]`)
textin.onchange = function(e){   //or oninput
    console.log(e.target.value)
}
//
var textin = document.querySelector(`input[type="checkbox"]`)
textin.onchange = function(e){   //or oninput
    console.log(e.target.checked)
}
//
var textin = document.querySelector(`select`)
textin.onchange = function(e){   //or oninput
    console.log(e.target.value)
}

//4 key up/down
// mo phong phim tat
var textin = document.querySelector(`input[type="text"]`)
textin.onkeyup = function(e){   //or oninput
    console.log(e.target.value)
}

document.onkeyup = function(e){   //or oninput
    switch(e.key){
        case 'Escape':
            console.log(`escape`)
            break
    }
}

//preventDefault loai bo hanh vi cua trinh duyet
var aEle = document.links
for(let i=0; i< aEle.length;++i){
    aEle[i].onclick = function(e){    
        console.log(e.target.href)
        if(!e.target.href.startsWith(`https://fullstack.edu.vn/`)){
            e.preventDefault()
        }
    }
}
// su kien noi bot
document.querySelector('.noibot').onclick = 
    function(){
        console.log('div')
    }
    document.querySelector('.nb').onclick = 
    function(e){
        e.stopPropagation()
        console.log('buttonaaaaa')
    }
    
