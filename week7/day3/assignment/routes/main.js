const express = require('express')
const router = express()

router.get('/', async (req, res) => {
    const posts = await model.Post.findAll({})
    
    res.render('main', {posts: posts, user: req.session.user})
})

router.get('/add-post', async (req, res) => {
    res.render('addPost')
})

router.post('/add-post', async (req, res) => {
    const newPost = await model.Post.build({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        isPublished: req.body.isPublished
    })

    await newPost.save()
    console.log('movie added')
    res.redirect('/posts')
})

router.post('/delete-post', async (req, res) => {
    await model.Post.destroy({
        where: {
            id: parseInt(req.body.id)
        }
    })
    
    console.log('post deleted')
    res.redirect('/posts')
})

router.post('/update-post-page', async (req, res) => {

    const post = await model.Post.findAll({
        where: {
            id: parseInt(req.body.id)
        }
    })

    const postInfo = {
        id: post[0].dataValues.id,
        title: post[0].dataValues.title,
        body: post[0].dataValues.body,
        category: post[0].dataValues.category
    }

    res.render('updatePost', postInfo)
})

router.post('/update-post-info', async (req, res) => {
    await model.Post.update({
        title: req.body.title, 
        body: req.body.body, 
        category: req.body.category,
        isPublished: req.body.isPublished
    }, {
        where: {
            id: parseInt(req.body.id)
        }
    })

    console.log('post updated')
    res.redirect('/posts')
})

router.post('/filter', async (req, res) => {
    const filteredPosts = await model.Post.findAll({
        where: {
            category: req.body.category
        }
    })

    let filteredArr = []
    for(let i = 0; i < filteredPosts.length; i++) {
        const postInfo = {
            id: filteredPosts[i].dataValues.id,
            title: filteredPosts[i].dataValues.title,
            body: filteredPosts[i].dataValues.body,
            category: filteredPosts[i].dataValues.category
        }
        filteredArr.push(postInfo)
    }

    res.render('main', {posts: filteredArr})
})

module.exports = router