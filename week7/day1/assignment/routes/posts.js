const express = require('express')
const router = express()
const pgp = require('pg-promise')()
const connectionString = 'postgres://hsyuafdm:l_rGfVww_4cm-fH_T1dQ1pNjM5wqlVpE@ruby.db.elephantsql.com/hsyuafdm'
const db = pgp(connectionString)

router.get('/', async(req, res) => {
    const posts = await db.any('SELECT post_id, title, body, author, date_created, date_updated FROM posts')
    const sessionUser = req.session.username
    res.render('index', {posts: posts, user: sessionUser})
})

router.get('/add-post', (req, res) => {
    res.render('addPost')
})

router.post('/add-post', async(req, res) => {
    await db.none('INSERT INTO posts(title, body, author, is_published) VALUES($1, $2, $3, $4)', [req.body.title, req.body.body, req.session.username, true])
    res.redirect('/posts')
})

router.post('/delete-post', async(req, res) => {
    const id = parseInt(req.body.id)
    await db.none('DELETE FROM posts WHERE post_id = $1', [id])
    res.redirect('/posts')
})

router.get('/update-post', (req, res) => {
    res.render('updatePost', {arr: updateArr})
})

router.post('/update-post', async(req, res) => {
    const id = req.body.id
    const info = await db.one('SELECT title, body, post_id FROM posts WHERE post_id = $1', [id])
    updateArr.pop()
    updateArr.push(info)
    res.redirect('/posts/update-post')
})

router.post('/update-info', async(req, res) => {
    const time = new Date
    const isoTime = time.toISOString()
    await db.none('UPDATE posts SET title = $1, body = $2, date_updated = $3 WHERE post_id = $4', [req.body.title, req.body.body, isoTime, req.body.id])
    res.redirect('/posts')
})

router.post('/filter-posts', async(req, res) => {
    const posts = await db.any('SELECT post_id, title, body, author, date_created, date_updated FROM posts')
    const filteredPosts = posts.filter((post) => post.author === req.session.username)
    const sessionUser = req.session.username
    res.render('index', {posts: filteredPosts, user: sessionUser})
})

module.exports = router