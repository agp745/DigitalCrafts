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
    const password = req.body.password

    const user = await models.User.findOne({
        where: {
            username: req.body.username
        }
    })

    console.log(user)

    bcrypt.decodeBase64

    if(user) {
        const result = await bcrypt.compare(password, user.dataValues.password)
        console.log(result)
        if(result) {
            res.status(200).json({"success": "user logged in"})
        } else {
            res.status(400).json({"error": "bad credentials"})
        }
        
    } else {
        res.status(400).json({"error": "bad credentials"})
    }
})

module.exports = router