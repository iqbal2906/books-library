const { User, Borrow, Book } = require('../models')
const { generateToken, verifyToken } = require('../helpers')
class UserController {
    static register(req, res, next) {
        if (req.session.token) {
            res.redirect('/')
        } else {
            res.render('register', { err: '' })
        }
    }

    static registered(req, res, next) {
        let { username, email, password, password2 } = req.body

        if (password != password2) {
            res.render('register', {
                err: {
                    errors: [{ message: `Password tidak sama` }]
                }
            })
        } else {
            const newData = {
                username,
                email,
                password,
                password2
            }
            User.create(newData)
                .then(result => {
                    req.session.token = generateToken({ id: result.id, username: result.username, role: result.role })
                    res.redirect('/users/dashboard/' + username)
                })
                .catch(err => {
                    res.render('register', { err })
                })
        }

    }

    static login(req, res, next) {
        if (req.session.token) {
            res.redirect('/')
        } else {
            res.render('login', { err: '' })
        }
    }

    static loggedIn(req, res) {
        const { username, password } = req.body
        User.findOne({ where: { username } })
            .then((data) => {
                if (data) {
                    if (password == data.password) {
                        req.session.token = generateToken({ id: data.id, username: data.username, role: data.role })
                        res.redirect('/users/dashboard/' + data.username)
                    } else {
                        res.render('login', { err: { errors: [{ message: 'password salah' }] } })
                    }
                } else {
                    res.render('login', { err: { errors: [{ message: 'username tidak terdaftar' }] } })
                }
            })
            .catch(err => {
                res.render('login', { err })
            })
    }

    static success(req, res, next) {
        if (req.session.token) {
            let verify = verifyToken(req.session.token)
            if (verify.username == req.params.username) {
                User.findOne({ where: { username: req.params.username } })
                    .then(data => {
                        Borrow.findAll({ where: { UserId: data.id }, include: [{ model: Book }] })
                            .then(result => {
                                res.render('dashboard', { books: result, user: data })
                            })
                            .catch(err => {
                                res.send({ err: err.errors })
                            })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            } else {
                res.redirect('/')
            }
        } else {
            res.redirect('/users/login')
        }
    }

    static logout(req, res) {
        req.session.token = false
        res.redirect('/')
    }

    // static middleware(req, res, next) {
    //     if (req.session.token) {
    //         next()
    //     } else {
    //         res.redirect('/')
    //     }
    // }
}

module.exports = UserController