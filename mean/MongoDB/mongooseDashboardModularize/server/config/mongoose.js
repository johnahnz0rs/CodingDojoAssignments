const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dashboard');
mongoose.Promise = global.Promise;

module.exports = mongoose;