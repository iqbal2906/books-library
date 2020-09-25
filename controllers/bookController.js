const { Book } = require('../models')
const { verifyToken } = require('../helpers')

class BookController {
    static findAll(req, res) {
        let verified = verifyToken(req.session.token)
        Book.findAll()
            .then((data) => {
                res.render('listBuku', { books: data, user: verified })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static add(req, res) {
        let verified = verifyToken(req.session.token)
        if (verified.role == 1) {
            res.render('listBuku')
        } else {
            res.render('dashboard', { err: { errors: [{ message: 'You are not admin' }] } })
        }
    }

    static create(req, res) {
        let payload = {
            judul: req.body.judul,
            tahunTerbit: req.body.tahunTerbit,
            penulis: req.body.penulis,
            jumlahBuku: req.body.jumlahBuku
        }
        Book.create(payload)
            .then(data => {
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static openEdit(req, res) {
        let verified = verifyToken(req.session.token)
        if (verified.role == 1) {
            Book.findOne({ where: { id: req.params.id } })
                .then(data => res.render('editBuku', { book: data }))
        } else {
            res.render('home', { err: { errors: [{ message: 'You are not admin' }] } })
        }
    }

    static confirmEdit(req, res) {
        let payload = {
            judul: req.body.judul,
            penulis: req.body.penulis,
            tahunTerbit: req.body.tahunTerbit,
            jumlahBuku: req.body.jumlahBuku
        }
        Book.update(payload, { where: { id: req.params.id } })
            .then(data => {
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteBook(req, res) {
        let verified = verifyToken(req.session.token)
        if (verified.role == 1) {
            Book.destroy({ where: { id: req.params.id } })
                .then(() => {
                    res.redirect('/books')
                })
                .catch(err => {
                    res.send(err)
                })
        } else {
            res.render('home', { err: { errors: [{ message: 'You are not admin' }] } })
        }
    }
}

module.exports = BookController