const express = require('express')

const {signUp, signIn} = require('../controllers/userController')

const {getPersonId} = require('../controllers/userController')
const requireAuth = require('../middleware/requireauth')
const router = express.Router()


//login route
router.post('/login', signIn)

router.get('/person', getPersonId);


//signup route
router.post('/signup', signUp)

module.exports = router