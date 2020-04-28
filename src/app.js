const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')

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

app.get('/', (req,res)=> {
    res.render('home', {

    })
})

app.get('/blogs-list', (req,res)=> {
    res.render('', {

    })
})

app.get('/comments', (req, res)=> {
    red.render('', {

    })
})

app.get('/about', (req, res)=> {
    
})