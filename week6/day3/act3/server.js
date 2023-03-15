const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')  

app.use(express.urlencoded())
app.use('/css/version-1', express.static('css'))
app.use('/js/third-party-libs', express.static('Libraries'))

app.get('/', (req, res) => {
    const object = {
        name: 'alex',
        street: 'main st',
        city: 'houston'
    }
    res.render('index', object)
})

app.listen(8080, () => {
    console.log('running on http://localhost:8080')
})