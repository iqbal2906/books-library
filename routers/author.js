const router = require('express').Router()
const AuthorController = require('../controllers/authorController.js')

router.get('/', AuthorController.read)

module.exports = router