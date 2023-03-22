const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const bcrypt = require('bcryptjs')
global.model = require('./models')

const PORT = 8080
const postsRouter = require('./routes/main')
const e = require('express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(session({
    secret: 'cookie',
    saveUninitialized: false
}))
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {

    const user = await model.User.findOne({
        where: {
            username: req.body.username
        }
    })

    if(user) {
        const result = await bcrypt.compare(req.body.password, user.dataValues.password)
        if(result) {
            if(req.session) {
                req.session.user = req.body.username
            }

            res.redirect('/posts')
        } else {
            res.render('login', {err: 'invalid username or password'})
        }
    } else {
        res.render('login', {err: 'invalid username or password'})
    }

})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = await model.User.build({
        username: req.body.username,
        password: hashedPassword
    })

    if(req.session) {
        req.session.user = req.body.username
    }

    await newUser.save()
    console.log('user added')

    res.redirect('/posts')
})

app.post('/signout', (req, res) => {
    const user = req.session.user
    req.session.user = null
    res.render('login', {message: `successfully signed out as ${user}`})
})

app.listen(PORT, () => {
    console.log(`now listening on http://localhost:${PORT}`)
})