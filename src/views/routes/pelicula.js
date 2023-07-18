const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

router.get('/', peliculaController.list);
router.post('/add', peliculaController.save );
router.get('delete/:id',  peliculaController.delete);
router.get('/update/:id', peliculaController.edit);
router.post('/update/:id', peliculaController.update);


module.exports = router;