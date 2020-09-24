const { User } = require('../models')

class UserController {
    static register(req, res) {
        res.render('register')
    }

    static registered(req, res) {
        let { email, password, password2, name, address, phone } = req.body

        console.log({ email, password, password2, name, address, phone });

    }

    static login(req, res) {
        res.render('login')
    }

    static success(req, res) {
        User.findAll()
            .then(data => {
                res.render('dashboard')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = UserController