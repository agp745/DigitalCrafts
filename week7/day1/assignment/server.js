const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const pgp = require('pg-promise')()
const connectionString = 'postgres://hsyuafdm:l_rGfVww_4cm-fH_T1dQ1pNjM5wqlVpE@ruby.db.elephantsql.com/hsyuafdm'
const db = pgp(connectionString)

const PORT = 8080

const postsRouter = require('./routes/posts')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

const authenticateUser = async (req, res, next) => {
    const usersArr = await db.any('SELECT username, password FROM users')
    const user = usersArr.find((user) => user.username === req.session.username && user.password === req.session.password)
    if(user) {
        next()
    } else {
        req.session.username = req.session.password = null
        res.render('login', {err: 'username or password is invalid'})
    }
}

app.use(express.urlencoded())
app.use(session({
    secret:'superSecret',
    saveUninitialized: false
})) 
app.use('/posts', authenticateUser, postsRouter)

global.updateArr = []

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    req.session.username = req.body.username
    req.session.password = req.body.password
    res.redirect('/posts')
})

app.get('/sign-up', (req, res) => {
    res.render('signup')
})

app.post('/sign-up', async(req, res) => {
    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, req.body.password])
    req.session.username = req.body.username
    req.session.password = req.body.password
    console.log(`New user "${req.session.username}" has been added!`)
    res.redirect('/posts')
})

app.post('/sign-out', (req, res) => {
    res.render('login', {message: `Successfully signed out as ${req.session.username}!`})
    req.session.username = req.session.password = null
    console.log(req.session)
})

app.listen(PORT, ()  => {
    console.log(`listening on http://localhost:${PORT}`)
})