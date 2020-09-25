const { Book, Borrow } = require('../models')
const { verifyToken } = require('../helpers')

class BorrowController {

    static pinjam(req, res) {
        let verified = verifyToken(req.session.token)
        const payload = {
            UserId: verified.id,
            BookId: +req.params.id,
            status: 'Dipinjam'
        }
        Borrow.create(payload)
            .then((data) => {
                return Book.findOne({ where: { id: req.params.id } })
            })
            .then(result => {
                return Book.update({ jumlahBuku: result.jumlahBuku - 1 }, { where: { id: result.id } })
            })
            .then(() => {
                res.redirect('/users/dashboard/' + verified.username)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static kembalikan(req, res) {
        let verified = verifyToken(req.session.token)
        const payload = {
            UserId: verified.id,
            BookId: +req.params.id,
            status: 'Dikembalikan'
        }
        Borrow.update(payload, { where: { BookId: req.params.id, UserId: verified.id } })
            .then((data) => {
                return Book.findOne({ where: { id: req.params.id } })
            })
            .then(result => {
                // res.send(result)
                return Book.update({ jumlahBuku: result.jumlahBuku + 1 }, { where: { id: result.id } })
            })
            .then(() => {
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = BorrowController