const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routers/index.js')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + 'public/css'));
app.use(cookieParser())
app.use(session({ secret: 'rahasia' }))
app.use(routes)

app.post('/', async(req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'maniacjoe3@gmail.com'
        }
    })
})

app.listen(port, () => {
    console.log(`App running at https://localhost: ${port}`);
})