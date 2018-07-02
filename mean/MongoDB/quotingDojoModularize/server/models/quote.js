const mongoose = require('../config/mongoose.js');
// const Schema = mongoose();


const QuoteSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String}
}, {timestamps: true});


mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');


module.exports = Quote;