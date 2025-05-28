// carico il modulo di express e lo memorizzo
const express = require('express');

// crea un'istanza dell'applicazione
const app = express();
// imposta la porta su cui il server ascolterà
const port = 3000;


// mette il server in ascolto sulla porta specificata
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})