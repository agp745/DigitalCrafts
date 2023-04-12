const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

app.get("/api/books", async (req, res) => {
    const books = await models.Book.findAll({})
    res.json(books)
})

app.post("/api/books", async (req, res) => {
    const newBookBody = {
        title: req.body.title,
        genre: req.body.gerne,
        publisher: req.body.publisher,
        year: parseInt(req.body.year),
        imageURL: req.body.imageURL
    }
    const newBook = await models.Book.build(newBookBody)

    await newBook.save()

    console.log(`New Book "${newBook.title}" added!`)
    res.json({"success": "book added"})
})

app.post('/api/delete/:id', async (req, res) => {
    await models.Book.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({"success": "book deleted"})
})

app.get('/api/update/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const book = await models.Book.findByPk(id)
    res.json(book)
})

app.post('/api/update/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    
    const updatedBook = {
        title: req.body.title,
        genre: req.body.genre,
        publisher: req.body.publisher,
        year: parseInt(req.body.year),
        imageURL: req.body.imageURL,
    }

    await models.Book.update(updatedBook, {
        where: {
            id: id
        }
    })

    res.json({"message": "book updated successfully"})
})

app.listen(8080, () => {
    console.log(`listening on http://localhost:8080`)
})