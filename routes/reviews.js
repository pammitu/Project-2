const express = require('express');
const router = express.router();

const reviewsController = require('../controllers/reviews');

router.post('/books/:id/reviews', reviewsController.create);

module.exports = router;