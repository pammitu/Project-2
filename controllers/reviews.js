const Book = require('../models/book');

async function create(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);

        foundBook.reviews.push(req.body);
        await foundBook.save();
        res.redirect(`/books/${foundBook._id}`);
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

async function deleteReview(req, res) {
    try {
        const foundBook = await Book.findOne({ 'reviews._id': req.params.id });
        if (!foundBook) return res.redirect('/books');
        foundBook.reviews.remove(req.params.id);
       
        await foundBook.save();
        res.redirect(`/books/${foundBook._id}`);
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    create,
    delete: deleteReview
};