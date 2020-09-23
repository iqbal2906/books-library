const { User } = require('../models')

class UserController {
    static register(req, res) {
        res.render('register')
    }

    static login(req, res) {
        res.render('login')
    }

    static success(req, res) {
        User.findAll()
            .then(data => {
                res.render('dashboard', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = UserController