const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');

const booksRoutes = require('./routes/books');
const reviewsRoutes = require('./routes/reviews')
const quotesRoutes = require('./routes/quotes')
// initialize express application
const app = express();

// configure application settings
app.set('view engine', 'ejs');
// expose environment variables
require('dotenv').config();
// require an execute database config code
require('./config/database');
// console.log(process.env); // look at the environment variables

// mount middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // this creates req.body from an HTML form submission
app.use(methodOverride('_method'));

// mount routes
// app.get('/', (req, res) => {
//     res.redirect('/books');
// });
app.use('/books', booksRoutes);
app.use('/', reviewsRoutes);
app.use('/', quotesRoutes);

// "fallback" or "catch all" route for serving a 404 page.
// we'll send this page if the user or developer sends a request to a route that doesn't exist
app.use('*', (req, res) => {
    res.render('404', {title: '404 - Page Not Found'});
});

// tell the application to listen for requests
app.listen(process.env.PORT, () => {
    console.log('express is listening on port:3000');
});