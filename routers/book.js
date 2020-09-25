const router = require('express').Router()
const BookController = require('../controllers/bookController.js')
const BorrowController = require('../controllers/borrowController.js')

const Auth = require('../middlewares/Auth')
router.get('/', Auth, BookController.findAll)
router.get('/add', Auth, BookController.add)
router.post('/add', Auth, BookController.create)
router.get('/edit/:id', Auth, BookController.openEdit)
router.post('/edit/:id', Auth, BookController.confirmEdit)
router.get('/delete/:id', Auth, BookController.deleteBook)
router.get('/borrow/:id', Auth, BorrowController.pinjam)
router.get('/return/:id', Auth, BorrowController.kembalikan)

module.exports = router