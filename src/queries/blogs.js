const dbConnection = require('../database/db_connection');

const readAll = cb => {
    dbConnection.query('SELECT * from blogs', (err, res) => {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
}
const readContent = (id, cb) => {
    dbConnection.query(`select * from blogs where id = ${id} `, (err,res)=> {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
}

module.exports = {readAll, readContent}