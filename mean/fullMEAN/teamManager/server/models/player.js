const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  position: {type: String, trim: true},
  game1: {type: String},
  game2: {type: String},
  game3: {type: String}
});

mongoose.model('Player', playerSchema);
const Player = mongoose.model('Player');

module.exports = Player;