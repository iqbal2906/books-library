const Auth = (req, res, next) => {
    if (req.session.token) next()
    else res.redirect('/')
}

module.exports = Auth