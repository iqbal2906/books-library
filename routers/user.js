const router = require('express').Router()
const UserController = require('../controllers/userController.js')
    // const authentication = require('./')
router.get('/register', UserController.register)
router.post('/register', UserController.registered)
router.get('/login', UserController.login)
router.post('/login', UserController.loggedIn)
router.get('/logout', UserController.logout)
router.get('/dashboard/:username', UserController.success)

module.exports = router