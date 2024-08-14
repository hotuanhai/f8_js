var coursesApi = `http://localhost:3000/courses`

function start(){
    getCourses(renderCourses)
    handleCreate()
}
start()

//function
function getCourses(callback){
    fetch(coursesApi)
    .then(function(data){
        return data.json()
    })
    .then(callback)
}

function createCourses(data,callback){
    var options = {
        method : `POST`,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          }
    }
    fetch(coursesApi,options)
        .then(function(res){
            return res.json()
        })
        .then(callback)
}

function handleDeleteCourse(id){
    var options = {
        method : `DELETE`,
        headers: {
            "Content-Type": "application/json",
          }
    }
    fetch(`${coursesApi}/${id}`,options)
        .then(function(res){
            res.json()
        })
        .then(function(){
            var courseItem = document.querySelector(`.course-id:` + id)
            if(courseItem){
                courseItem.remove()
            }
        })
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector(`#list-courses`)
    var htmls = courses.map(function(course){
        return`
            <li class="course-id:${course.id}">
                <h4>${course.name}</h4>
                <p> ${course.description}</p>
                <button onclick="handleDeleteCourse('${course.id}')">Xóa</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join(``)
}

function handleCreate(){
    var createBtn = document.querySelector(`#create`)
    createBtn.onclick = function(e){
        e.preventDefault()
        var name = document.querySelector(`input[name="name"]`).value
        var description = document.querySelector(`input[name="description"]`).value
        var data = {
            name : name,
            description : description
        }
        createCourses(data,function(newData){
            //C1: render lai 
            // getCourses(renderCourses)
            //C2: them vao cai cu
            var html = `
                <li class="course-id:${newData.id}">
                    <h4>${data.name}</h4>
                    <p> ${data.description}</p>
                    <button onclick="handleDeleteCourse(${newData.id})">Xóa</button>
                </li>
            `
            listCoursesBlock.appendChild(html)
        })
    }
}
