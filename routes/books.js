const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

//books index route
router.get('/', booksController.index);

//New book route
router.get('/new', booksController.new);

//create route
router.post('/', booksController.create);

//show route -  must go last
router.get('/:id', booksController.show);

module.exports = router;