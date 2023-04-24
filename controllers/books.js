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

async function index(req, res) {
    try {
        const allBooks = await Book.find({});
        
        res.render('books/index', { 
            books: allBooks, 
            title: 'All Books'
        });
    } catch (error) {
        // during development mode; console.log the error 
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}

module.exports = {
    new: newBook,
    create,
    index
};