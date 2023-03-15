const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/:city', (req, res) => {
    res.render('city', {city : req.params.city})
})

module.exports = router