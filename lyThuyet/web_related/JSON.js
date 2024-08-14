//stringify:JS to JSON parse:JSON to js
// var json = '["js","php"]'
 var json = '{"name":"hai" , "age":18}'
//convert json to js
var a ='"abc"'
console.log(JSON.parse(json))
console.log(JSON.stringify(1))
console.log(JSON.stringify(['js','p"h"p']))
console.log(JSON.stringify({name:"hai" , age:18,test: function(){}})) // cant stringify function