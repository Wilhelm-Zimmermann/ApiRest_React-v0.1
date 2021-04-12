const express = require('express')
const router = express.Router()

const controllerPosts = require('../controllers/controller_posts')

// 'get' all elements
router.get('/posts',controllerPosts.getPosts)

// 'get' one element based on id
router.get('/posts/:post_id',controllerPosts.getOnePost)

// 'put' update one element based on id
router.put('/posts/:post_id/coment',controllerPosts.addComent)

// 'delete' delete one element based on id
router.delete('/posts/:post_id/delete',controllerPosts.deleteComent)

// 'post' add new elements
router.post('/posts',controllerPosts.addPosts)

module.exports = router