const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    } 
});

const bookSchema = new Schema({
    coverImage: {String},
    title: {String},
    author: {String},
    summary: {String},
    reviews: [reviewSchema],
    notableQuotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Quote'
    }], //use an array of strings here to store separate quotes, getting info from somewhere else
});


//export book model
module.exports = mongoose.model('Book', bookSchema)