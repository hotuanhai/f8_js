var api = `http://localhost:3000/posts`
fetch(api)
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        console.log(data)
    })