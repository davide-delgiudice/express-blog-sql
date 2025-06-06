const express = require('express');

// creo un router di Express per organizzare le rotte
const router = express.Router();

// importo il controller
const blogController = require('../controllers/blogController');


// rotta index
router.get('/', blogController.index)

// rotta del singolo post
router.get('/:id', blogController.show)

// rotta per la cancellazione di un post
router.delete('/:id', blogController.destroy)


// esporto il router
module.exports = router;