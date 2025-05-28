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
            return res.status(500).json({error: "Database query failed"+err});
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
        WHERE id = ?
    `;

    // creo la query che mi recupera i tag del post selezionato
    const tagSql = `
        SELECT *
        FROM tags
        JOIN post_tag
        ON tags.id = post_tag.tag_id
        WHERE post_tag.post_id = ?
    `

    // eseguo la query
    connection.query(sql, [id], (err, postResults) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"});
        }

        // recupero il post in posizione 0
        const post = postResults[0];

        // eseguo la query per recuperare i tag
        connection.query(tagSql, [id], (err, tagResults) => {
            if(err) {
                return res.status(500).json({error: "Database query failed"+err});
            }

            // creo la proprietà tag che viene restituito dalla query
            post.tags = tagResults;

            res.json(post);
        })
    })
};

module.exports = {
    index, show
}