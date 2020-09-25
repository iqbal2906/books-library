const express = require('express');
const app = express();
const port = 3000;
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

app.listen(port, () => {
    console.log(`App running at https://localhost: ${port}`);
})