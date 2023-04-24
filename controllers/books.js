const Book = require('../models/book');
const Quote = require('../models/quotes');

function newBook(req, res) {
    res.render('books/new', {
        title: 'Enter a New Book'
    });
}

async function create(req, res) {
    try {
        const book = await Book.create(req.body);

        res.redirect(`/books/${book._id}`);
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    new: newBook,
    create
};