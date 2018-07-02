const playerController = require('../controllers/players.js');

const router = require('express').Router();

module.exports = router
  .get('/players', playerController.getAllPlayers)
  .get('/players/list', playerController.getAllPlayers)
  // .post('/players/initial', playerController.addInitialData)
  .post('/players', playerController.addPlayer)
  .get('/players/:id', playerController.getOnePlayer)
  .put('/players/:id', playerController.updateOnePlayer)
  .delete('/players/:id', playerController.deleteOnePlayer);
