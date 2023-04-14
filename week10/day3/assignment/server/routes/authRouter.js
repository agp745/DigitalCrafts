const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcryptjs')

router.post("/auth/signup", async (req, res) => {
    const username = req.body.username

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = await models.User.build({
        username: username,
        password: hashedPassword
    })

    await newUser.save()

    res.json({"success": "user created"})
})

router.post("/auth/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = models.User.findOne({
        where: {
            username: username
        }
    })


    if(user) {
        const result = await bcrypt.compare(password, user.password)

        if(result) {
            res.json({"success": "logged in"})
        } else {
            res.json({"error": "bad credentials"})
        }
        
    } else {
        res.json({"error": "bad credentials"})
    }
})

module.exports = router