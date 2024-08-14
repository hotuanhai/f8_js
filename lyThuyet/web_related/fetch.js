// backend -> api(url) -> fetch -> json/xml
//json.parse -> js
var api = `https://jsonplaceholder.typicode.com/todos/1`
//stream
fetch(api)
    .then(function(res){
        // .json return a promise
        return res.json() 
    })
    .then(function(data){
        console.log(data)
        var htmls = `<li>${data.title}</li>`
        document.getElementById(`post-block`).innerHTML = htmls
    })
    .catch(function(err){
        console.log(err)
    })

    //fetch
// json server (fake api)
// RESR API standard
// postman : crud with fake api