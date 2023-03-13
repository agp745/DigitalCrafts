const title = document.querySelector('#title')
const priority = document.querySelector('#priority')
const date = document.querySelector('#date')
const button = document.querySelector('#submit')
const list = document.querySelector('#todoList')
const update = document.querySelector('#updateSection')

async function getList() {
    const request = await fetch(`http://localhost:8080/todos`)
    .then(response => response.json())
    console.log(request)

    const todos = request.map((item, index) => {
        return `
        <div id="itemTitle">${item.title}</div>
        <div id="itemPriority">${item.priority}</div>
        <div id="itemDate">${item.date}</div>
        <div id="index">${index}</div>
        <button id="deleteItem" onclick="deleteItem('${index}')">delete</button>
        <button id="updateItem" onclick="updateItem('${index}','${item.title}','${item.priority}','${item.date}')">update</button>
        `
    })
    
    list.innerHTML += todos.join('')
}

async function addItem(t, p, d) {

    const body = { 
        title: t,
        priority: p,
        date: d
    }

    const request = await fetch(`http://localhost:8080/todos`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    })
}

async function deleteItem(index) {

    const request = await fetch(`http://localhost:8080/todos/${index}`, {
        method: "DELETE",
    })
    .then(response => response.json())

    console.log(request)
}

function updateItem(index, t, p, d) {
    const updateInput = `
    <label>Update ${index.title}:</label>
    <input type="text" id="updatedTitle" value="${t}">
    <input type="text" id="updatedPriority" value="${p}">
    <input type="text" id="updatedDate" value="${d}">
    <button id="updateButton">update</button>
    <br>
    `
    update.innerHTML += updateInput

    const updateButton = document.querySelector('#updateButton')
    const newTitle = document.querySelector('#updatedTitle')
    const newPriority = document.querySelector('#updatedPriority')
    const newDate = document.querySelector('#updatedDate')

    updateButton.addEventListener('click', () => {
        putOnServer(newTitle.value, newPriority.value, newDate.value)
    })
}

async function putOnServer(newT, newP, newD) {
    const data = {
        title: newT,
        priority: newP,
        newDate: newD
    }

    const request = await fetch(`http://localhost:8080/todos/${index}`, {
        Method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: json.stringify(data)
    })
    .then(response => response.json())
    console.log(request)
}


getList()

button.addEventListener('click', () => {
    const todoTitle = title.value
    const todoPriority = priority.value
    console.log(todoPriority)
    const todoDate = date.value
    console.log(todoDate)

    console.log('clicked')
    addItem(todoTitle, todoPriority, todoDate)
})