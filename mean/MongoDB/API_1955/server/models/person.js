const mongoose = require('./../config/mongoose.js');

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Person', PersonSchema);
const Person = mongoose.model('Person');

module.exports = Person;