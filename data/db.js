// importo mysql2
const mysql = require('mysql2');

// creo la variabile per la connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_blog'
});

// utilizza una variabile per instaurare la connessione
connection.connect(() => {
    console.log('Connected to MySQL')
})

module.exports = connection;