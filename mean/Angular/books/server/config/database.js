const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.join(__dirname, '../models');
    // path.resolve

mongoose.connect('mongodb://localhost/books');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


mongoose.Promise = global.Promise;


fs.readdirSync(modelsPath).forEach(file => {
   if (reg.test(file)) {
    require(path.join(modelsPath, file));
   }
});