let in4 = {
    name: 'hai',
    age: 18,
    addr: 'hht'
}
for(let i in in4) console.log(i)
for(let i in in4) console.log(in4[i])

delete in4.name
console.log(in4)


let arr = [11,22,33]
for( let i of arr) console.log(i)
for( let i in arr) console.log(i)