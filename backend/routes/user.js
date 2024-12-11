const express = require('express')

const {signUp, signIn} = require('../controllers/userController')

const router = express.Router()


//login route
router.post('/login', signIn)

//signup route
router.post('/signup', signUp)

module.exports = router