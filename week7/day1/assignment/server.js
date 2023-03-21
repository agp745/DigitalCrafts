const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const pgp = require('pg-promise')()
const connectionString = 'postgres://hsyuafdm:l_rGfVww_4cm-fH_T1dQ1pNjM5wqlVpE@ruby.db.elephantsql.com/hsyuafdm'
const db = pgp(connectionString)
const bcrypt = require('bcryptjs')

const PORT = 8080

const postsRouter = require('./routes/posts')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(session({
    secret:'superSecret',
    saveUninitialized: false
})) 
app.use('/posts', postsRouter)

global.updateArr = []

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {

    const user = await db.oneOrNone('SELECT username, password FROM users WHERE username = $1', [req.body.username])

    if(user) {
        const result = bcrypt.compare(req.body.password, user.password)

        if(result) {
            if(req.session) {
                req.session.username = req.body.username
            }
            res.redirect('/posts')
        } else {
            res.render('login', {err: 'username or password is invalid'})
        }
    } else {
        res.render('login', {err: 'username or password is invalid'})
    }

    req.session.username = req.body.username
})

app.get('/sign-up', (req, res) => {
    res.render('signup')
})

app.post('/sign-up', async(req, res) => {
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, hashedPassword])
    req.session.username = req.body.username

    console.log(`New user "${req.session.username}" has been added!`)
    res.redirect('/posts')
})

app.post('/sign-out', (req, res) => {
    res.render('login', {message: `Successfully signed out as ${req.session.username}!`})
    req.session.username = null
})

app.listen(PORT, ()  => {
    console.log(`listening on http://localhost:${PORT}`)
})