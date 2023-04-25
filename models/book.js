const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    pageNum: {
        type: Number
    },
    characterName: {
        type: String
    },
    content: {
        type: String
    }
})

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
}, { timestamps: true });

const bookSchema = new Schema({
    coverImage: { 
    data:Buffer,
    Type: String
    },
    title: {
         type: String,
        required: true
     },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    notableQuotes: [quoteSchema]
    });

//export book model
module.exports = mongoose.model('Book', bookSchema)