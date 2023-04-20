const express = require("express")
const app = express()
const cors = require("cors")
const models = require("./models")
const { check, validationResult } = require("express-validator")

const logger = (req, res, next) => {
    console.log(req.url)
    const date = new Date()
    console.log(date)
    next()
}

app.use(cors())
app.use(express.json())
app.use(logger)
app.use("/static", express.static("static"))

app.get("/api/users", async (req, res) => {
    const users = await models.User.findAll({})
    const userData = users.map((user) => user.dataValues)
    res.json(userData)
})

app.get("/api/users/:id", async (req, res) => {
    const user = await models.User.findOne({
        where: {
            id: parseInt(req.params.id),
        },
    })
    res.json(user.dataValues)
})

// app.post("/api/users", async (req, res) => {
//     const reqUser = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         age: parseInt(req.body.age),
//     }

//     const newUser = await models.User.build(reqUser)
//     await newUser.save()

//     res.redirect("/api/users")
// })

app.post(
    "/api/users",
    [
        check("first_name").not().isEmpty(),
        check("last_name").not().isEmpty(),
        check("age").isNumeric(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const { first_name, last_name, age } = req.body

        const newUser = await models.User.build({
            first_name: first_name,
            last_name: last_name,
            age: parseInt(age),
        })

        await newUser.save()

        res.redirect("/api/users")
    }
)

app.delete("/api/users/:id", async (req, res) => {
    await models.User.destroy({
        where: {
            id: req.params.id,
        },
    })
    res.redirect("/api/users")
})

app.put("/api/users/:id", async (req, res) => {
    const id = req.params.id
    const update = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: parseInt(req.body.age),
    }

    await models.User.update(update, {
        where: {
            id: id,
        },
    })
    res.redirect("/api/users")
})

app.patch("/api/users/:id", async (req, res) => {
    const id = req.params.id
    const update = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: parseInt(req.body.age),
    }

    await models.User.update(update, {
        where: {
            id: id,
        },
    })
    res.redirect("/api/users")
})

app.get("/api/comments/:user_id", async (req, res) => {
    const getComments = await models.Comment.findAll({
        where: {
            user_id: req.params.user_id,
        },
    })

    const comments = getComments.map((comment) => comment.dataValues)

    res.json(comments)
})

app.listen(8080, () => {
    console.log("server is running on http://localhost:8080")
})
