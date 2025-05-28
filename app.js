// carico il modulo di express e lo memorizzo
const express = require('express');

// crea un'istanza dell'applicazione
const app = express();
// imposta la porta su cui il server ascolterà
const port = 3000;
// importo il router nell'app
const blogRouter = require('./routers/post.js');

//middleware per il parsing del body delle richieste
app.use(express.json());

// imposta la rotta base
app.get("/", (req, res) => {
    res.send("Benvenuto nella pagina principale dei Post!")
})

// per tutte le richieste che iniziano con Post uso il router postRouter
app.use("/blog", blogRouter)

// mette il server in ascolto sulla porta specificata
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})