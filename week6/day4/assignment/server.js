const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const tripsRouter = require('./routes/trips')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

const PORT = 8080

app.use(express.urlencoded())
app.use(session({
    secret: 'Secret',
    saveUninitialized: false
}))

const testUser = {
    username: 'anonSquid',
    password: '123'
}

const test = {
    destination: 'Dallas',
    departure: '2023-03-16',
    arrive: '2013-03-16',
    imageURL: 'img.com',
    id: 2454
}

global.usersList = [testUser]
global.tripsList = [test]

app.use('/trips', tripsRouter)

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    console.log(usersList)
    res.render('login')
})

app.post('/login', (req, res) => {
    
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(user)
    let current = usersList.find((existingUser) => existingUser.username === user.username)
    console.log(current)

    if(current !== undefined) {
        if(req.session) {
            req.session.user = user
        }
    
        res.redirect('/trips/main')
    }
    else if(current === undefined) {
        res.render('login', {err: `not a valid username or password`})
    }

})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    
    req.session.user = user
    
    usersList.push(user)

    res.redirect('/trips/main')
})

app.post('/signout', (req, res) => {
    let tempUser = req.session.user.username
    req.session.user = null
    res.render('login', {signoutConfirm: `successfully signed out as ${tempUser}`})
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})