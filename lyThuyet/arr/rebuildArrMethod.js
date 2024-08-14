var courses = ['css','js','py','java']
// forEach
Array.prototype.forEach2 = function(callback){
    for(let i in this){
        if(this.hasOwnProperty(i)){   // i nam truc tiep trong this  => loai bo cac thu trong proto
            callback(this[i],i,this)
        }
        
    }
}

courses.forEach2(function(course,index,arr){
    console.log(course,index,arr)
})

//filter
var courses = [
    {
        id: 1,
        name: 'js',
        coin: 200
    },
    {
        id: 2,
        name: 'java',
        coin: 100
    },
    {
        id: 3,
        name: 'php',
        coin: 500
    },
]
// filtercourses = courses.filter(function(course,index,arr){
//     return course.coin > 100
// })
console.log('filter')
Array.prototype.filter2 = function(callback){
    arr = []
    for(let i in this){
        if(this.hasOwnProperty(i)){   // i nam truc tiep trong this  => loai bo cac thu trong proto
            var istrue = callback(this[i],i,this)
            if(istrue) arr.push(this[i])
        }       
    }
    return arr
}

filtercourses = courses.filter2(function(course,index,arr){
    return course.coin > 100
})
console.log(filtercourses)

//some
console.log('some')
Array.prototype.some2 = function(callback){
    for(let i in this){
        if(this.hasOwnProperty(i)){   // i nam truc tiep trong this  => loai bo cac thu trong proto
            var istrue = callback(this[i],i,this)
            if(istrue) return true
        }       
    }
    return false
}

somecourses = courses.some2(function(course,index,arr){
    return course.coin > 500
})
console.log(somecourses)

//every
console.log('every')
Array.prototype.every2 = function(callback){
    for(let i in this){
        if(this.hasOwnProperty(i)){   // i nam truc tiep trong this  => loai bo cac thu trong proto
            var istrue = callback(this[i],i,this)
            if(!istrue) return false
        }       
    }
    return true
}

everycourses = courses.every2(function(course,index,arr){
    return course.coin > 10
})
console.log(everycourses)