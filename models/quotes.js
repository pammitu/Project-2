const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    pageNum: Number,
    characterName: String,
    quote: String,
})

module.exports = mongoose.model('Quote', quoteSchema);