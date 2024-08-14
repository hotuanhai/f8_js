var users = [
    {
        id: 1,
        name: `hai ho`,
    },
    {
        id: 2,
        name: `tomboy`,
    },
    {
        id: 3,
        name: `my boos`,
    }
]
var comments = [
    {
        id:1,
        user_id: 1,
        content: `chua ra vid`
    },
    {
        id:2,
        user_id: 2,
        content: `sad qua`
    },
    {
        id:3,
        user_id: 2,
        content: `hii`
    }
]
//promise hell
function getComments(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}
function getUserByID(uIDs){
    return new Promise(function(resolve,reject){
        var result = users.filter(function(user){
            return uIDs.includes(user.id)
        })
        resolve(result)
    })
}

getComments()
    .then(function(comments){
        var uIDs = comments.map(function(comment){
            return comment.user_id
        })
        return getUserByID(uIDs)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data){
        var commentBlock =document.getElementById(`comment-block`)
        var html =``
        data.comments.forEach(function(comment) { 
            var user = data.users.find(function(user){
                return user.id == comment.user_id
            })
            html += `<li>${user.name} : ${comment.content}</li>`
        });
        commentBlock.innerHTML = html
    })