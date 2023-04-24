const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: String,
    author: String,
    coverImage: String,
    summary: String,
    reviews: [reviewSchema],
    notableQuotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Quote'
    }], //use an array of strings here to store separate quotes, getting info from somewhere else
});

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

//export book model
module.exports = mongoose.model('Book',bookSchema)