const router = require('express').Router()
const UserController = require('../controllers/userController.js')

router.get('/register', UserController.register)
router.post('/register', UserController.registered)
router.get('/login', UserController.login)
router.get('/dashboard', UserController.success)

module.exports = router