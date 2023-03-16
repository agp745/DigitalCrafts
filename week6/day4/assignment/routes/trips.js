const express = require('express')
const router = express()

router.get('/main', (req, res) => {
    const user = req.session.user
    const info = {userInfo: user, trips: tripsList}
    res.render('index', info)
})

router.get('/addTrip', (req, res) => {
    res.render('addTrip')
})

router.post('/addTrip', (req, res) => {
    const newTrip = {
        destination: req.body.destination,
        departure: req.body.departure,
        arrive: req.body.arrive,
        imageURL: req.body.imageURL,
        id: tripsList.length + 1
    }
    tripsList.push(newTrip)
    res.redirect('/trips/main')
})

router.post('/deleteTrip', (req, res) => {
    const id = parseInt(req.body.id)
    tripsList = tripsList.filter((trip) => trip.id !== id)
    res.redirect('/trips/main')
})
module.exports = router