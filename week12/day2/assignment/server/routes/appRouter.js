const exrpess = require('express')
const router = exrpess.Router()
const models = require('../models')
const authenticate = require('../middleware/authMW')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')
require('dotenv').config()

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

router.post('/api/delete/:id', authenticate, async (req, res) => {
    await models.Book.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({success: "book deleted"})
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

router.get('/api/current_user/:token', async(req, res) => {
    const username_email = jwt.decode(req.params.token, process.env.SECRET_KEY)

    if(username_email) {
        try{
            const user = await models.User.findOne({
                where: {
                    [Op.or]:
                        [{username: username_email}, {email: username_email}]
                }
            })
            if(user) {
                res.json({success: true, user: user.dataValues})
            } else {
                res.json({success: false, error: 'error fetching user from database'})
            }

        } catch(e) {
            throw new Error(e)
        }
    } else {
        res.status(401).json({success: false, error: 'invalid token'})
    }
})

router.post('/api/current_user/update_email', async (req, res) => {
    
    await models.User.update({email: req.body.email}, {
        where: {
            id: Number(req.body.id)
        }
    })

    res.json({success: true, message: 'Email Updated!'})
})

module.exports = router