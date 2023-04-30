const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

// POST New Review
router.post('/books/:id/reviews', reviewsController.create);

// DELETE Delete Review
router.delete('/books/:id/reviews/:id', reviewsController.delete);

// EDIT Review
router.put('/books/:id/reviews/:id', reviewsController.edit);

module.exports = router;