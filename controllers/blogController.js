// recuper la variabile di connessione al database
const connection = require('../data/db');

// metodo index del controller
const index = (req, res) => {
    const sql = `
    SELECT * 
    FROM posts
    `;

    // eseguo la query utilizzando il metodo query della variabile connection
    connection.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"});
        }

        res.json(results);
    })
};


// metodo show del controller
const show = (req, res) => {
    // recupero l'ID
    const id = req.params.id;

    const sql = `
    SELECT *
    FROM posts
    WHERE id = ${id}
    `;

    // eseguo la query
    connection.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"});
        }

        res.json(results);
    })
};

module.exports = {
    index, show
}