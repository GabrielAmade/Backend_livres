const express = require('express');
const router = express.Router();
const bookCtrl = require("../controllers/book")
//supprimer API ???

router.post('/Ajouter', bookCtrl.createBook);
 
router.put('/livre/modifier/:id', bookCtrl.modifyBook);
 
router.delete('/livre/:id', bookCtrl.deleteBook);
 
router.get('/livre/:id', bookCtrl.getOneBook);
 
router.get('/books', bookCtrl.getAllBooks);



module.exports = router;

