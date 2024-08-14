// EventListener co the huy bo lang nghe (DOM ko the huy)
//DOM dgian hon
var btn = document.getElementById(`btn`)
console.log(btn)
function viec(){
    console.log(`event1`)
}
btn.addEventListener('click',viec)  //event - function

setTimeout(() => {
    btn.removeEventListener('click',viec)
}, 3000);
        
 

