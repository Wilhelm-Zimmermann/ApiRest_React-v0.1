const express = require('express')
const route = express.Router()

const userController = require('../controllers/controller_user')

route.post('/signup',userController.newUser)

route.post('/login',userController.login)

module.exports = route