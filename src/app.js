const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const {readAll} = require('./queries/blogs');
const comments = require('./queries/comments')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views', 'layouts'));
app.set('view engine', 'hbs')

app.engine(
    'hbs',
    exphbs({
        extname: "hbs",
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: "main"
    })
)

let data;
readAll((err, res) => {
    if (err)
        return err
    else
        data = res
})


app.get('/', (req, res) => {
    res.render('home', {
       data
    })
})

// app.get('/blogs-lists', (req,res)=> {
//     res.render('', {
//     name: "Marwan"
//     })
// })

// app.get('/comments', (req, res)=> {
//     red.render('', {

//     })
// })

// app.get('/about', (req, res)=> {

// })

// app.get('/contact', (req, res)=> {

// })

module.exports = app;