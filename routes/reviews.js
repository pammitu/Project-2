const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');

router.post('/books/:id/reviews', reviewsController.create);

router.delete('/books/:id/reviews/:id', reviewsController.delete);

module.exports = router;