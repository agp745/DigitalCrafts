const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const { sensitiveHeaders } = require('node:http2')
const path = require('node:path')
const PORT = 8080

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

const mwFunc = (req, res, next) => {
    console.log(req.method)
    next()
}

const customHeader = (req, res, next) => {
    res.setHeader('custom-header', 'this is a custom header!')
    next()
}

const err404 = (req, res, next) => {
    res.status(404).send("sorry, wrong path")
    next()
}

app.use(express.urlencoded())
app.use(express.static('static'))
app.use(mwFunc)
app.use(customHeader)

app.get('/', mwFunc, (req, res) => {
    res.send('hello, world!')
})

app.get('/contact', (req, res) => {
    const contact = {
        name: 'Alex Perez',
        email: 'agp@gmail.com',
        phone: '800-800-8000'
    }
    res.json(contact)
})

app.get('/name/:name', (req, res) => {
    const name = req.params.name
    res.render('index', {name: name})
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.post('/post', (req, res) => {
    const info = {
        name: req.body.name,
        age: req.body.age
    }

    console.log(JSON.stringify(info))
    res.redirect('/post')
})

app.get('/new-route', (req, res) => {
    res.send('this is the new route')
})

app.get('/old-route', (req, res) => {
    res.redirect('/new-route')
})

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'test.txt')
    console.log(__dirname)
    res.download(file)
})

app.use(err404)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})