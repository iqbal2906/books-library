const router = require('express').Router()
const UserController = require('../controllers/userController.js')

router.get('/:id/register', UserController.register)
router.get('/:id/login', UserController.login)
router.get('/:id/dashboard', UserController.success)

module.exports = router