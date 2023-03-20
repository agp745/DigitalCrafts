const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const pgp = require('pg-promise')()
const connectionString = 'postgres://hsyuafdm:l_rGfVww_4cm-fH_T1dQ1pNjM5wqlVpE@ruby.db.elephantsql.com/hsyuafdm'
const db = pgp(connectionString)
const PORT = 8080

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.get('/', async (req, res) => {
    const friends = await db.any('SELECT id, name, favorite_movie FROM friends')
    console.log(friends)
    res.render('index', {friends: friends})
})

app.post('/add-friend', async (req, res) => {
    await db.none('INSERT INTO friends(name, favorite_movie) VALUES($1, $2)', [req.body.name, req.body.favoriteMovie])
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})