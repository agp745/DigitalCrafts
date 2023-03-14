const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.use(express.urlencoded())

app.set('views', './views')
app.set('view engine', 'mustache')

let customersArr = []

app.get('/', (req, res) => {
    res.render('index', {arr: customersArr})
})

app.get('/customers/:name', (req, res) => {
    let customer = {name: req.params.name}
    res.render('customers', customer)
})

app.get('/add-customer', (req, res) => {
    res.render('add-customer')
})

app.post('/add-customer', (req, res) => {
    const custName = req.body.name
    const custAge = req.body.age

    const customer = {name: custName, age: custAge}

    customersArr.push(customer)

    res.redirect('/')
})

app.listen(8080, () => {
    console.log(`Server is Running on http://localhost:8080`)
})