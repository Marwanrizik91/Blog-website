const dbConnection = require('../database/db_connection');

const readAll = cb => {
    dbConnection.query('SELECT * from blogs', (err, res) => {
        if (err)
            return err;
        else
        console.log(res.rows)
            cb(null, res.rows)
    })
}

module.exports = {readAll}