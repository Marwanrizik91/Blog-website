const readAll = cb => {
    dbConnection.query('SELECT * all from blogs', (err, res) => {
        if (err)
            return err;
        else
            cb(null, res.rows)
    })
}