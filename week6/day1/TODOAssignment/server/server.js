const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let todoList = []

app.get('/todos', (req, res) => {
    res.status(200).json(todoList)
})

app.post('/todos', (req, res) => {
    const todoItem = {
        title: req.body.title,
        priority: req.body.priority,
        date: req.body.date
    }    

    todoList.push(todoItem)
    res.status(200).json({success: true, message: "task has been added"})
})

app.get('/todos/:title', (req, res) => {
    const item = todoList.filter((item) => item.title === req.params.title )
    res.status(200).json(item)
})

app.delete('/todos/:id', (req, res) => {
    todoList.splice(req.params.id, 1)
    res.json({success: true, message: `"${req.params.title}" deleted from ToDo list`})
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id
    const updatedItem = req.body
    todoList[id] = updatedItem
    res.json({success: true, message: `Sucessfully updated item`})
})

app.listen(8080, () => {
    console.log(`server running on http://localhost:8080 ...`)
})
