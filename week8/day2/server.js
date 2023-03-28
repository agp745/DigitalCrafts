const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const mongoose = require("mongoose")
const Task = require("./schemas/task")

app.engine("mustache", mustacheExpress())

app.set("views", "./views")
app.set("view engine", "mustache")

app.use(express.urlencoded())

mongoose
  .connect(
    "mongodb+srv://agp745:minecraft@cluster0.7qykcc2.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("DB connected")
  })
  .catch((error) => {
    console.log(error)
  })

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/add-item", async (req, res) => {
  try {
    const newTask = new Task({
      taskName: req.body.taskName,
      taskPriority: req.body.taskPriority,
      completedDate: req.body.completedDate,
    })

    await newTask.save()

    res.redirect("/")
  } catch {
    res.render("index", { err: "error adding book" })
  }
})

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({})

  res.render("tasks", { tasks: tasks })
})

app.post("/delete", async (req, res) => {
  const id = req.body.id
  await Task.findByIdAndDelete(id)
  res.redirect("/tasks")
})

app.post("/update", async (req, res) => {
  const item = await Task.findById(req.body.id)
  res.render("update", item)
})

app.post("/send-update", async (req, res) => {
  const id = req.body.id
  const updatedItem = {
    taskName: req.body.taskName,
    taskPriority: req.body.taskPriority,
    completedDate: req.body.completedDate,
  }

  await Task.findByIdAndUpdate(id, updatedItem)

  res.redirect("/tasks")
})

app.listen(8080, () => {
  console.log("now listening on http://localhost:8080")
})
