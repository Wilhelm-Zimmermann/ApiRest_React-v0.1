const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')

const controllerPosts = require('../controllers/controller_posts')

// 'get' all elements
router.get(
    '/posts',
    auth.private,
    controllerPosts.getPosts
)

// 'get' one element based on id
router.get(
    '/posts/:post_id',
    auth.private,
    controllerPosts.getOnePost
)

// 'put' update one element based on id
router.put(
    '/posts/:post_id/coment',
    auth.private,
    controllerPosts.addComent
)

// 'delete' delete one element based on id
router.delete(
    '/posts/:post_id/delete',
    auth.private,
    controllerPosts.deleteComent
)

// 'post' add new elements
router.post(
    '/posts',
    auth.private,
    controllerPosts.addPosts
)

module.exports = router