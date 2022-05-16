//var myString = 'Trung hoc JS tai F8'

//console.log(myString.length)
//console.log(myString.search('JS')); console.log(myString.indexOf('JS'))
//console.log(myString.slice(0,5))
//console.log(myString.replace(/JS/g, 'Javascript'))
//console.log(myString.toUpperCase())
//console.log(myString.toLowerCase())
//console.log(myString.trim())

//var langs = 'JS, PHP, Ruby'
//console.log(langs.split(', '))
//console.log(myString.charAt(10)); console.log(myString[10])


// Object constructor
// Object prototype
/* function User(firstName, lastName, avatar)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Trung', 'Nguyễn', 'Avatar 1');
var user = new User('Eden', 'Nguyen', 'Avatar 2');

author.title = 'Best pro no.1';
user.comment = 'Co len nhe!';

console.log(author.className);
console.log(user.className); */


// Đối tượng Date
/* var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`); */


// Lệnh If - else
/* const date = 5;

if(date === 2) {
    console.log('Hom nay la thu 2');
} else if(date === 3) {
    console.log('Hom nay la thu 3');
} else if(date === 4) {
    console.log('Hom nay la thu 4');
} else {
    console.log('Khong biet thu may!')
} */


// Câu lệnh Switch
/* var date = 5;

switch(date) {
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    default:
        console.log('Khong biet thu may');
} */


// Toan tu 3 ngoi
/* const course = {
    name: 'JS',
    price: 210
}
const result = course.price > 0 ? `${course.price} coins` : 'Free';

console.log(result);

var a = 1, b = 2;
var c = a > 1 ? `a = ${a}` : `b = ${b}`;
console.log(c); */


// Vong lap for
/* var exList = [
    'Kieu Phuong',
    'Vinh Su',
    'Tuong Vy',
    'Het roi :)'
];

var arrayLength = exList.length;
console.log('Danh sach NYC:');

for(let i = 0; i < arrayLength; i++) {
    console.log(exList[i])
} */


// Vong lap for/in - qua key cua doi tuong
/* var myInfo = {
    name: 'Trung',
    age: 23,
    address: 'Hau Giang'
};
for(var key in myInfo) {
    console.log(myInfo[key])
}

var myArray = [
    'JS',
    'PHP',
    'Java',
    'C#',
]
for(var key in myArray) {
    console.log(myArray[key])
}

var myString = 'Javascript';
for(var key in myString) {
    console.log(myString[key])
} */


// Vong lap for/of - qua value cua doi tuong
/* var myString = 'Java';
var myArray = [
    'JS',
    'PHP',
    'JAVA'
];
for(var value of myArray) {
    console.log(value)
}

var myInfo = {
    name: 'Trung',
    age: 23,
    status: 'single'
};
for(var value of Object.values(myInfo)) {
    console.log(value)    
} */


// Vong lap while
/* var i = 0;
var myArray = [
    'JS',
    'PHP',
    'Java'
]
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
} */


// Vong lap do/while
/* var i = 0;
var account = {
    userName: 'admin',
    passWord: 'admin'
}
var login = false;

do {
    i++;
    var inputUN = prompt('Nhap tai khoan:');
    var inputPass = prompt('Nhap mat khau:');

    //thanh cong
    if(inputUN === account.userName && inputPass === account.passWord) {
        login = true;
        alert('Dang nhap thanh cong');
    } else if (i === 3) { //khong thoa dk while
        alert('Ban da nhap sai qua nhieu lan');
    } else {
        alert('That bai! Sai thong tin lan '+i);
    }

}while(!login && i < 3); */


// Break v Continue
/* for(var i = 0; i < 10; i++) {
    console.log(i);
    if(i>=5) {
        break;
    }
}
for(var i = 0; i < 10; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);
} */


// Vong lap long nhau - Nested loop
/* var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];
for(var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
} */


// Them vd vong lap
/* var count = 0;
for(var i = 0; i <= 100; i++) {
    
    if(i%5 == 0) {
        console.log(i);
        count++;
    }
}
console.log('So luong so chia het cho 5: ',count);

for(var i = 100; i >= 0; i -= 10) {
    console.log(i);
} */


// De quy
/* function loop(start, end, callback) {
    if(start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}

var array = ['JS','PHP','CSS'];
loop(0, array.length, function(index) {
    console.log(array[index])
}); */


//tinh giai thua
/* function giaiThua(number) {
    if(number > 0) {
        return number * giaiThua(number - 1)
    }
    return 1;
}
console.log(giaiThua(4)); */


// Phuong thuc cua Mang - Array methods
// forEach, every, some, find, filter, map, reduce
/* var courses = [
    {
        id: 1,
        name: 'JS',
        fee: 100
    },
    {
        id: 2,
        name: 'PHP',
        fee: 200
    },
    {
        id: 3,
        name: 'HTML, CSS',
        fee: 400
    },
    {
        id: 4,
        name: 'ReactJS',
        fee: 500
    },
    {
        id: 5,
        name: 'NodeJS',
        fee: 500
    }
]; */  

/* courses.forEach(function(course, index){
    console.log(index,course);
}); */

/* //some(),every()
var isFree = courses.some(function(course, index){
    console.log(index);
    return course.fee === 0;
});
console.log(isFree); */

/* //find(), filter()
var listCourse = courses.filter(function(course){
    return course.name === 'PHP';
});
console.log(listCourse); */

/* //map()
function courseHandler(course, index){
    return `<h3>${course.name}</h3>`
};
var newCourses = courses.map(courseHandler);
console.log(newCourses.join('')); */

/* //reduce()
var initialValue = 0;
var totalFee = courses.reduce(function(total,course) {
    return total + course.fee;
}, initialValue);
console.log('Total Fee:',totalFee); */

/* //BT1: Flat - "Làm phẳng" mang tu Depth array(mảng sâu)
 var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray); */

/* //BT2: lay ra cac khoa hoc dua vao mang moi
 var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
        
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NOdeJS'
            }
        ]
        
    },
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
},[]);

console.log(newCourses);
var renderHTML = newCourses.map(function(course) {
    return `
    <div>
        <h3>${course.title}</h3>
        <p>ID: ${course.id}</p>
    </div>`;
});
console.log(renderHTML.join('')); */

/* //Logic cua reduce() - reduce2
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if(arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const numbers = [1,2,3,4,5]
const result = numbers.reduce2((total,number) => {
    return total + number
},10)
console.log(result) */

/* // includes method in Array/String
var title = 'ABC Web'
var course = ['JS','PHP','CSS','NodeJS']
console.log(course.includes('PHP')) */


// Callback
/* function myFunc(param) {
    if(typeof param === 'function') {
        param('Hello World');
    }
}

function myCallback(value) {
    console.log('Value: ',value);
}

myFunc(myCallback); */

// Callback - part 2
/* var courses = ['JS','PHP','CSS','HTML']

Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length
    
    for(var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i) //lay kq tu return cua ham callback
        output.push(result)    //them kq lay duoc vao mang rong
    }
    return output
}

var htmls = courses.map2(function(course) {
    return `<h4>${course}</h4>`     //ham callback
})

console.log(htmls.join(' ')); */

/* // forEach2
const langs = ['JS','CSS','ReactJS','PHP']

Array.prototype.forEach2 = function(callback) {
    for(const i in this) {
        if(this.hasOwnProperty(i)) {
  	        callback(this[i], i, this)
        }
    }
}
langs.forEach2(function(a) {
   console.log(a);
}) */

/* // find2
const numbers = [5, 1, 10, 30]

Array.prototype.find2 = function(callback) {
    for(const i in this) {
        if(this.hasOwnProperty(i)) {
            if(callback(this[i], i, this)) return this[i]
        }
    }
}

const findNum = numbers.find2(function(num) {
    return num > 0
})
console.log('find():',findNum); */

/* // filter2
Array.prototype.filter2 = function(callback) {
    const output = []

    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                output.push(this[i])
            }
        }
    }
    return output
}

const courses = [
    {
        name: 'Javascript',
        fee: 650
    },
    {
        name: 'PHP',
        fee: 770
    },
    {
        name: 'NodeJS',
        fee: 800
    }
]
const filterCourse = courses.filter2(function(course) {
    return course.fee > 700
})
console.log('filter():',filterCourse); */

/* // some2, every2
const courses = [
    {
        name: 'Javascript',
        fee: 650,
        isFinish: true,
    },
    {
        name: 'PHP',
        fee: 770,
        isFinish: true,
    },
    {
        name: 'NodeJS',
        fee: 800,
        isFinish: true,
    }
]

Array.prototype.some2 = function(callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) return true
        }
    }
    return false
}

Array.prototype.every2 = function(callback) {
    let output = true
    
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            const result = callback(this[index], index, this)
            if(!result) {
                output = false
                break
            }
        }
    }
    return output
}

const result = courses.every2(function(course) {
    return course.fee > 500
})
console.log(result); */


// HTML DOM
/* // Element: id, class, tag, css selector, HTML collection
const list = document.querySelectorAll('h1')

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
} */

/* // DOM attributes
const headingEle = document.querySelector('h1:nth-child(2)')
headingEle.setAttribute('style','color:red;font-family:sans-serif')
headingEle.title = 'title-heading'

console.log(headingEle.getAttribute('title')); */

/* // innerText, textContent
const headingElement = document.querySelector('.heading')

console.log(headingElement.innerText);
console.log(headingElement.textContent); */

/* // innerHTML, outerHTML
const boxElement = document.querySelector('.box')

console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML); */

/* // DOM style CSS
const boxElement = document.querySelector('.box')

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'skyblue',
    border: '1px solid black',
    borderRadius: '4px'
})
console.log(boxElement.style); */

/* // ClassList property; add, contains, remove, toggle  
let boxElement = document.querySelector('.box')

setInterval(() => {
    boxElement.classList.toggle('color')
}, 1000); */

/* // DOM events
let h1Elemnts = document.querySelectorAll('h1')

for (let i = 0; i < h1Elemnts.length; i++) {
    h1Elemnts[i].onclick = (e) => {
        console.log(e.target);
    }
} */

/* // DOM events example
//input / select; key up/down
var inputEle = document.querySelector('input[type="text"]')

inputEle.onkeyup = function(e) {
    switch(e.which) {
        case 27:
            console.log('You press ESC');
            break;
        case 13: 
            console.log('You press Enter');
            break;
        default:
            console.log('You press others');
    }
} */

/* // preventDefault, stopPropagation
//example 1: 
const aElements = document.links

for (let i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://youtube.com')) {
            e.preventDefault()
        }
    }
}
//example 2: 
const ulElement = document.querySelector('ul')

ulElement.onmousedown = (e) => {
    e.preventDefault()
}
ulElement.onclick = (e) => {
    console.log(e.target)
}
//ex: stopPropagation
document.querySelector('div').onclick = function() {
    console.log('DIV')
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation()
    console.log('Click me!')
} */

/* // Event listener
const btn = document.getElementById('btn')

function viec1() {
    console.log('Viec 1');
}
function viec2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)

setTimeout(function() {
    btn.removeEventListener('click',viec1)
    console.log('Da huy lang nghe su kien viec1');
}, 2500) */


// JSON
/* //use JSON
var json1 = '["JS","PHP"]'
var json2 = '{"name":"Trung","age":18}'

console.log(JSON.parse(json1));
console.log(JSON.stringify({
    name: 'Trung',
    age: 23
})); */

// Promise (sync/async, pain, concept, chain)
/* //Promise.resolve, Promise.reject, Promise.all
var promise1 = new Promise(function(resolve) {
    setTimeout(() => {
        resolve([1])
    }, 1000);
})
var promise2 = new Promise(function(resolve) {
    setTimeout(() => {
        resolve([2,3])
    }, 2000);
})
// var promise2 = Promise.reject('Co loi')

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        console.log(result1.concat(result2));
    })
    .catch((err) => {
        console.log(err);
    }) */

/* //Promise example
var users = [
    {
        id: 1,
        name: 'Trung Nguyen'
    },
    {
        id: 2,
        name: 'Eden Hazard'
    },
    {
        id: 3,
        name: 'Mason Mount'
    },
    
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Dep zai qua anh ei'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Cam on em nhe'
    },
    {
        id: 3,
        user_id: 1,
        content: 'okkk anh'
    }
]
//lay comments
//tu comments lay ra user_id tuong ung voi users
//fake API

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = users.filter((user) => {
                return userIds.includes(user.id)
            })
            resolve(result)
        }, 1000);
    })
}

getComments()
    .then((comments) => {   
        let userIds = comments.map((comment) => {
            return comment.user_id
        })
        
        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users,
                    comments
                }
            })
    })
    .then((data) => {
        var cmtBlock = document.getElementById('show')
        var html = ''
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        
        cmtBlock.innerHTML = html
    }) */

/* // Fetch 
const postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then((response) => {
        return response.json() //JSON.parse
    })
    .then((postsInURL) => {
        let htmls = postsInURL.map((post) => {
            return `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `;
        })

        let html = htmls.join('')
        document.getElementById('posts').innerHTML = html
    })
    .catch((err) => {
        alert('Co loi');
    }) */

/* // JSON server: API server (Fake) / Mock API
var courseAPI = 'http://localhost:3000/cousers'

fetch(courseAPI)
    .then((response) => {
        return response.json()
    })
    .then((courses) => {
        console.log(courses);
    }) */

/* // Postman with Fetch & REST API
var getAPI = 'http://localhost:3000/cousers';

//start app 
function start() {
    getCourses(renderCourses)
    handleCreateForm()
}
start();

//show course
function getCourses(callback) {
    fetch(getAPI)
        .then((response) => {
            return response.json()
        })
        .then(callback)
}
//create course 
function createCourse(data, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(getAPI, options)
        .then((response) => {
            return response.json()
        })
        .then(callback)
    
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('input[name="description"]').value = ''
}
//update course
function updateCourse(courseId, data, callback) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(getAPI + '/' + courseId, options)
        .then((response) => {
            return response.json()
        })
        .then(callback)
    
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('input[name="description"]').value = ''
    document.querySelector('.btn-save').remove()
    document.querySelector('.btn-cancel').remove()
    var btnCreate = document.querySelector('.btn-block')
    var html = `<button class="btn" id="create">Create</button>`
    btnCreate.innerHTML = html
}

//delete course
function deleteCourse(courseId) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(getAPI + '/' + courseId, options)
        .then((response) => {
            return response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-'+courseId)
            if(courseItem) {
                courseItem.remove()
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map((course) => {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Delete</button>
                <button onclick="handleUpdateForm(${course.id})">Update</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var des = document.querySelector('input[name="description"]').value;
        
        if(name === '' || des === '') {
            alert('Vui long nhap day du thong tin')
        }else {
            var formData = {
                name: name,
                description: des
            }
            createCourse(formData, function() {
                getCourses(renderCourses)
            });
        }  
    }
} 

function handleUpdateForm(courseId) {
    const getInfo = document.querySelector('.course-item-'+courseId);

    document.querySelector('input[name="name"]').value = 
        getInfo.querySelector('h4').innerText;
    document.querySelector('input[name="description"]').value = 
        getInfo.querySelector('p').innerText;

    var saveCourse = document.querySelector('.btn-block')
    var html = `<button class="btn btn-save">Save</button>`
    var html2 = `<button class="btn btn-cancel" onclick="window.location.reload();">Cancel</button>`
    saveCourse.innerHTML = html + html2

    saveCourse.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var des = document.querySelector('input[name="description"]').value
        
        if(name == '' || des == '') {
            alert('Thong tin khong duoc de trong')
        }else {
            var data = {name:name, description:des}
            updateCourse(courseId, data, function() {
                getCourses(renderCourses)
            })  
        }
    }
} */


// ES6
/* // let & const , arrow function, 
const sum = (a,b) => a + b
console.log(sum(2,2)) */

/* // Classes
class Animal {
    constructor(name, leg) {
        this.name = name;
        this.leg = leg;
    }

    speaker(sound) {
        return sound
    }
}

const pig = new Animal('Con Heo', 4);
const soundPig = pig.speaker('Ot..Ot');

const bird = new Animal('Con Chim',2);
const soundBird = bird.speaker('Chit, chit')

console.log(`${pig.name} co ${pig.leg} chan, keu ${soundPig}`);
console.log(`${bird.name} co ${bird.leg} chan, keu ${soundBird}`); */

/* // Default param value
logger = (log, type = 'log') => {
    console[type](log)
}

logger('Message...', 'warn') */

/* // Enhanced object literals
const fieldName = "name"
const fieldPrice = "price"

const course = {
    [fieldName] : 'Javascript',
    [fieldPrice]: 1000,
    getName() {
        return this[fieldName]
    }
}

console.log(course.getName()) */

/* // Destructuring, Rest
const array = ['JS','PHP','CSS','Python']
const [a, b, ...rest] = array

console.log(a, b);
console.log('...rest',rest);

const course = {
    name: 'Javascript',
    price: 500,
    image: 'image-course',
}
const {name, description = 'default value',...rest2} = course

console.log(name, description, rest2);

function logger([a, b, ...param]) {
    console.log(a)
    console.log(b)
    console.log(param);
}
logger([1,2, 3,4,5,6,7]); */

/* // Spread
const array1 = ['JS','PHP']
const array2 = ['ReactJS','NodeJS']
const array3 = [...array2, ...array1]

console.log(array3);

const obj1 = {name: 'JS'}
const obj2 = {price: 1000}
const obj3 = {...obj1, ...obj2}

console.log(obj3);

const arr = ['Javascript', 'PHP', 'CSS', 'ReactJS']
function logger(...param) {  //rest
    for(let i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}

logger(...arr)  //spread */

/* // Tagged template literals
function custom([first, ...strings], ...values) {
    let result = values.reduce(function(luuTru, giatriHientai) {
        return [...luuTru, `<b>${giatriHientai}</b>`, strings.shift()]
    },[first])

    return result.join('')
}

const person = 'you'
const place = 'universe'

const html = custom`I love ${person} in every ${place}!`
console.log(html) */

/* // Modules
import { logger2 } from './logger/index.js'
import * as types from './constants.js'

logger2('Test message...', types.type_warn) */

/* // Optional chaining (?.)
const obj = {
    name: 'ALice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah 2',
            cat3: {
                name: 'Dinah 3',
            }
        }
    },
    // getName(value) {
    //     console.log(value);
    // }
}
obj.getName?.(123)

if(obj.cat?.cat2?.cat3) {
    console.log(obj.cat.cat2.cat3.name);
} */


// Cac bai thuc hanh
/* // Xay dung Tabs UI
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

//active line
const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

Object.assign(line.style,{
    left: tabActive.offsetLeft + 'px',
    width: tabActive.offsetWidth + 'px'
})

let i = 1
let autoRun = setInterval(() => {
    
    $('.tab-item.active').classList.remove('active')
    tabs[i].classList.add('active')

    $('.tab-pane.active').classList.remove('active')
    panes[i].classList.add('active')
    
    line.style.left = tabs[i].offsetLeft + 'px'
    line.style.width = tabs[i].offsetWidth + 'px'

    i++;

    if(i == tabs.length) i = 0;

}, 2000);

//lap qua 'tabs' de lay tung phan tu
tabs.forEach((tab,index) => {
    const pane = panes[index]

    tab.onclick = function() { 
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')

        clearInterval(autoRun)
    }
}) */

// Music Player
/** 
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Play random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
*/
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const volumeAdjust = $('#volumeAdjust')
const volumeIcon = $('.btn-volume')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    volumeValue: 0,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Pastlives',
            singer: 'Sapientdream',
            path: './assets/music/song1-pastlives.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name: 'Somebody that used to know',
            singer: 'Gotye ft. Kimbra',
            path: './assets/music/song2-somebodythatusedtoknow.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name: 'Heartbreak Anniversary',
            singer: 'Giveon',
            path: './assets/music/song3-heartbreakanniversary.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name: 'Dusk till dawn',
            singer: 'ZAYN & Sia',
            path: './assets/music/song4-dusktilldawn.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name: 'Before you go',
            singer: 'Lewis Capaldi',
            path: './assets/music/song5-beforeyougo.mp3',
            image: './assets/img/song5.jpg'
        },
        {
            name: 'Someone you loved',
            singer: 'Lewis Capaldi',
            path: './assets/music/song6-someoneyouloved.mp3',
            image: './assets/img/song6.jpg'
        },
        {
            name: 'Arcade',
            singer: 'Ducan Laurence',
            path: './assets/music/song7-arcade.mp3',
            image: './assets/img/song7.jpg'
        },
        {
            name: 'Until I found you',
            singer: 'Stephen Sanchez',
            path: './assets/music/song8-untilifoundyou.mp3',
            image: './assets/img/song8.jpg'
        }
    ],
    setConfig(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>   
                </div>
            </div>`
        })

        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents() {
        const _this = this //this = app
        const cdWidth = cd.offsetWidth

        //Xu ly CD quay / dung
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        //Xu ly phong to/ thu nho CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        //Xu ly click play audio
        playBtn.onclick = function() {
            if(_this.isPlaying) {   
                audio.pause()
            }else {
                audio.play()
            }
        }
        //Khi songs duoc play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        //Khi songs bi pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //Khi tien do bai hat thay doi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime/audio.duration * 100)
                progress.value = progressPercent
            }
        }
        //Xu ly khi tua song
        progress.oninput = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        //Xu ly tang/giam volume
        volumeAdjust.oninput = function(e) {
            _this.volumeValue = e.target.value
            audio.volume = _this.volumeValue / 100
            _this.handleVolumeIcon()
        }

        //Xu ly khi next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //Xu ly khi prev song
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()

        }
    
        //Xu ly random song
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom',_this.isRandom)
            this.classList.toggle('active', _this.isRandom)
        }

        //Xu ly repeat song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat',_this.isRepeat)
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        //Xu ly next song khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }

        //Xu ly play audio khi click vao playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')) {
                //xu ly khi click vao song
                if (songNode) {
                   _this.currentIndex = Number(songNode.dataset.index)
                   _this.loadCurrentSong()
                   _this.render()
                   audio.play()
                }

                //xu ly khi click vao song option
                if(e.target.closest('.option')) {
                    
                }
            }
        }
    },
    handleVolumeIcon() {
        const volume = this.volumeValue
        if(volume == 0) {
            volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>'
        } else if(volume > 40) {
            volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>'
        } else {
            volumeIcon.innerHTML = '<i class="fas fa-volume-down"></i>'
        }
    },
    scrollToActiveSong() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            })
        }, 300)
    },
    loadCurrentSong() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    loadConfig() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start() {
        // Gan cau hinh tu config vao ung dung
        this.loadConfig()

        //Dinh nghia cac thuoc tinh cho object
        this.defineProperties()

        //Lang nghe / xu ly cac su kien DOM 
        this.handleEvents()

        // Tai thong tin bai hat dau tien vao UI khi chay app
        this.loadCurrentSong()

        // Render playlist
        this.render()

        // Hien thi trang thai ban dau cua button repeat && random
        repeatBtn.classList.toggle('active', app.isRepeat)
        randomBtn.classList.toggle('active', app.isRandom)
    }
}

app.start()
