
const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcryptjs')
const { Op } = require("sequelize")
const jwt = require('jsonwebtoken')


router.post("/auth/signup", async (req, res) => {
    const username = req.body.username
    const email = req.body.email

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = await models.User.build({
        username: username,
        email: email,
        password: hashedPassword
    })
    await newUser.save()

    const token = jwt.sign(username || email, 'secret_key')
    console.log(token)

    // res.json({success: "user created"})
    res.json({success: "user created", token: token})
})

router.post("/auth/login", async (req, res) => {
    const password = req.body.password

    const user = await models.User.findOne({
        where: {
            [Op.or]: 
                [{username: req.body.username_email}, {email: req.body.username_email}]
        }
    })
    console.log(user)

    if(user) {
        const result = await bcrypt.compare(password, user.dataValues.password)
        console.log(result)
        if(result) {
            const token = jwt.sign(user.dataValues.username, 'secret_key')

            res.status(200).json({success: true, token: token})
            // res.status(200).json({success: "user logged in"})
        } else {
            res.status(400).json({"error": "bad credentials"})
        }
        
    } else {
        res.status(400).json({"error": "bad credentials"})
    }
})

module.exports = router