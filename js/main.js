const formAddTask = document.getElementById("form-add-task");
const inputTask = document.getElementById("task-text");
const container = document.querySelector(".tasks");
let tasks = [] //массив задач

formAddTask.addEventListener("submit", function (event) {
event.preventDefault() //Отменяется перезагрузка сайта
console.log
    let nameTask = inputTask.value

    let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${nameTask}</span>`;
newTask.classList.add('task')
container.append(newTask)

tasks.push(nameTask)
})

//функционал - перевести все задачи в нижний регистр

const btnLowCase = document.getElementById("lowCase")
btnLowCase.addEventListener('click', function(){
let newTasks = [...tasks] //создаю новый массив на базе основного
for(let i = 0; i < newTasks.length; i++){ //ПЕРЕБИРАЕМ все элементы массива
    newTasks[i]=newTasks[i].toLowerCase() //переводим каждую задачу в нижний регистр
}
// console.log("Основной массив")
// console.log(tasks)
// console.log("Новый массив")
// console.log(newTasks)

container.innerHTML = "" //очищаем контейнер с задачами

for (let i in newTasks){ //перебирае массив и для каждого элемента создаем запись в контейнере
        let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${newTasks[i]}</span>`;
newTask.classList.add('task')
container.append(newTask)
container.append(newTask)
}


})

//сортировка задач по алфавиту

//функция вывода задач в контейнер
function showTasks(list){
    container.innerHTML = "" //очищаем контейнер с задачами
    for (let i in list){
        let newTask = document.createElement("div");
        newTask.innerHTML = `<span>${list[i]}</span>`;
        newTask.classList.add('task')
        container.append(newTask)

        // console.log(divs)
        // console.log(nodes)
    }
}

function compare(a, b){
    return a.localeCompare(b)
}

const btn1 = document.getElementById("btn1")
btn1.addEventListener('click', function(){
    let newTasks = [...tasks]
    newTasks.sort(compare)
    showTasks(newTasks)
})

//сортировка против алфавита

function compareReverse(a, b){
    return b.localeCompare(a)
}

const btn2 = document.getElementById("btn2")
btn2.addEventListener('click', function(){
    let newTasks = [...tasks]
    newTasks.sort(compareReverse)
    showTasks(newTasks)
})

//фильтрация только конкретных задач (срочные содержат "!")

const btn3 = document.getElementById("btn3")
btn3.addEventListener('click', function(){
    let newTasks = tasks.filter(function(task){
        return task.includes("!")
    })
    showTasks(newTasks)
})

//поиск по задаче

const searchText = document.getElementById("searchText")
const btn4 = document.getElementById("btn4")
btn4.addEventListener('click', function(){
    let newTasks = tasks.filter(function(task){
        return task.includes(searchText.value)
    })
    showTasks(newTasks)
})

//сброс всех фильтров!!

const btn5 = document.getElementById("btn5")
btn5.addEventListener('click', function(){
    searchText.value = ""
    showTasks(tasks)
})

// //работа с NodeList
// let divs = document.querySelectorAll("div") //Статическая коллекция
// // console.log(divs) 

// let divs2 = document.querySelector(".tasks").childNodes 
// динамическая коллекция
