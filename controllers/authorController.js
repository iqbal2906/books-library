const { Author } = require('../models')

class AuthorController {
    static read(req, res) {
        Author.findAll()
            .then(data => {
                res.render('authors', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = AuthorController