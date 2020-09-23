const router = require('express').Router()
const author = require('./author')
const book = require('./book')
const borrow = require('./borrow')
const user = require('./user')

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.use('/books', book)
router.use('/authors', author)
router.use('/borrows', borrow)
router.use('/users', user)

module.exports = router