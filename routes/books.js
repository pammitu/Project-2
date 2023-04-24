const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

//New movie route
router.get('/new', booksController.new);

//create route
router.post('/', booksController.create);

//books index route
router.get('/', booksController.index);

//show route -  must go last
router.get('/:id', booksController.show);

//adding quotes
router.post('/:id/quotes', booksController.show);

module.exports = router;