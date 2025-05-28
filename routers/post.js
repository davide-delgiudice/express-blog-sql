const express = require('express');

// creo un router di Express per organizzare le rotte
const router = express.Router();

// importo il controller
const postController = require('../controllers/postController');


// rotta index
router.get('/', postController.index)

// rotta del singolo post
router.get('/:id', postController.show)





// esporto il router
module.exports = router;