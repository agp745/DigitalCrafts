const exrpess = require('express')
const router = exrpess.Router()
const models = require('../models')

router.get("/api/books", async (req, res) => {
    const books = await models.Book.findAll({})
    res.json(books)
})

router.post("/api/books", async (req, res) => {
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

router.post('/api/delete/:id', async (req, res) => {
    await models.Book.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({"success": "book deleted"})
})

router.get('/api/update/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const book = await models.Book.findByPk(id)
    res.json(book)
})

router.post('/api/update/:id', async (req, res) => {
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

module.exports = router