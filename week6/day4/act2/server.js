const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

const PORT = 8080

app.use(express.urlencoded())
app.use(session({
    secret: 'Secret',
    saveUninitialized: false
}))

app.get('/register', (req, res) => {
    res.render('login')
})

app.post('/register', (req, res) => {
    const userName = req.body.name
    const userAge = req.body.age

    const user = {
        name: userName,
        age: userAge
    }

    if(req.session) {
        req.session.user = user
    }
    res.redirect('/confirm')
})

app.get('/confirm', (req, res) => {
    res.render('dashboard', req.session.user)
})


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/register`)
})