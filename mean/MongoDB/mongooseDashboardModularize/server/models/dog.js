const mongoose = require('../config/mongoose.js');

const DogSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    good_boy: {type: String}
}, {timestamps: true});

// models
mongoose.model("Dog", DogSchema);
const Dog = mongoose.model("Dog");

module.exports = Dog;