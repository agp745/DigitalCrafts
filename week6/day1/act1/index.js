const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let usersArr = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/name', (req, res) => {
    res.status(200).json(usersArr)
})

app.post('/name', (req, res) => {
   const firstName = req.body.first
   const lastName = req.body.last

   const person = {fullname : `${firstName}, ${lastName}`}
   usersArr.push(person)
   res.status(200).json({success: true, message:"name has been added"})
})

app.get('/digital-crafts/cohort/:year', (req, res) => {
    let response = `I study at DigitalCrafts ${req.params.year}`
    res.send(response)
})

app.listen(8080, () => {
    console.log('server is running on localhost:8080')
})