const dbConnection = require('../database/db_connection');

const readAll = cb => {
    dbConnection.query('SELECT * from comments', (err, res) => {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
}

const firstBlogAndComments = cb => {
    dbConnection.query('select * from blogs inner join comments on blogs.id = comments.blogs_id where blogs.id = 1', (err, res)=> {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
} 

const secondBlogAndComments = cb => {
    dbConnection.query('select * from blogs inner join comments on blogs.id = comments.blogs_id where blogs.id = 2', (err, res)=> {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
} 

const thirdBlogAndComments = cb => {
    dbConnection.query('select * from blogs inner join comments on blogs.id = comments.blogs_id where blogs.id = 3', (err, res)=> {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
} 

module.exports = {
    readAll,
    firstBlogAndComments,
    secondBlogAndComments,
    thirdBlogAndComments
}