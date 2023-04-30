const Book = require('../models/book');

function newBook(req, res) {
    res.render('books/new', {
        title: 'Enter a New Book'
    });
}

async function index(req, res) {
    try {
        const allBooks = await Book.find({});
        res.render('books', { 
            books: allBooks, 
            title: 'All Books'
        });
    } catch (error) {
        // during development mode; console.log the error 
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
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

async function show(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.render('books/show', {
            book: foundBook,
            title: foundBook.title,
        });
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    new: newBook,
    index,
    create,
    show
};