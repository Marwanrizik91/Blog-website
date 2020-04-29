const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const { readAll, readContent } = require('./queries/blogs');
const comments = require('./queries/comments')
// const favicon = require('serve-favicon')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views', 'layouts'));
app.set('view engine', 'hbs')



app.engine(
    'hbs',
    exphbs({
        extname: "hbs",
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: "main",
        helpers: {
            limitedContent: function (str) {
                return str.match(/(.){1,255}$/gi);
            },
            titleLink: function (blogTitle) {
                return blogTitle.replace(/\s/gi, '-').toLowerCase()
            },
        }
    })
)




app.get('/', (req, res) => {
    readAll((err, data) => {
        if (err)
            throw err;
        res.render('home', {
            data
        })

    })
})
let reqid;
app.get('/blog/:id', (req, res) => {
    reqid = req.params.id
    readContent(reqid, (err, data) => {
        if (err)
            {res.status(404)
            .send(err)}
        res.render('blogs', {
            result: data[0]
        })

    })
})

app.post('/add-comment', (req, res)=> {
    let date = new Date();
    let name = req.body.commentor;
    let comment = req.body.comment;
    console.log(req.body.commentor)
    comments.add(reqid, name, comment, date), ((err, comment) => {
        if (err)
            throw err;
        res.render(`blog/${id}`, {
            comment
        })
    })
    
})


// app.get('/blogs-lists', (req,res)=> {
//     res.render('', {
//     name: "Marwan"
//     })
// })



// app.get('/about', (req, res)=> {

// })

// app.get('/contact', (req, res)=> {

// })

module.exports = app;