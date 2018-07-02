const mongoose = require('mongoose');
const Player = mongoose.model('Player');


module.exports = {
  getAllPlayers: function(request, response) {
    Player.find({}, function(error, players) {
      if (error) {
        console.log('**** controller getAllPlayers error *****', error);
        response.json(error);
      } else {

        if (players.length > 0) {
          console.log('***** got', players.length, 'players ******');
          response.json(players);

        } else {
          const mongo = [
            {name: 'johnahnz0rs', position: "Campin' Pimp!", game1: 'playing', game2: 'playing', game3: 'playing'},
            {name: 'Keanu Reeves', position: "JAhn's bff", game1: 'playing', game2: 'playing', game3: 'playing'},
            {name: 'Benny F. Baby', position: "Please say the 'Baby'", game1: 'playing', game2: 'playing', game3: 'playing'},
            {name: 'Ke$ha', position: "JAhn's bottom girl", game1: 'playing', game2: 'playing', game3: 'playing'},
            {name: 'Dale Carnegie', position: "JAhn's conscience", game1: 'playing', game2: 'playing', game3: 'playing'}
          ];
          Player.insertMany(mongo, function(error) {
            if (error) {
              console.log('***** controller addInitialData error *****', error);
              response.json(error);
            } else {
              // console.log('***** initial data added to previously empty db *****');
              // response.json();
              Player.find({}, function(error, players2) {
                if (error) {
                  console.log('error OMGSAGFAD', error);
                  response.json(error);
                } else {
                  response.json(players2);
                }
              });
            }
          });
        }
      }
    });
  },


  // addInitialData: function(request, response) {
  //   console.log('***** controller addInitialData *****');
  //   console.log('request.body', request.body);
  //   const mongo = [
  //     {name: 'johnahnz0rs', position: "Campin' Pimp!", game1: 'playing', game2: 'playing', game3: 'playing'},
  //     {name: 'Keanu Reeves', position: "JAhn's bff", game1: 'playing', game2: 'playing', game3: 'playing'},
  //     {name: 'Benny F. Baby', position: "Please say the 'Baby'", game1: 'playing', game2: 'playing', game3: 'playing'},
  //     {name: 'Ke$ha', position: "JAhn's bottom girl", game1: 'playing', game2: 'playing', game3: 'playing'},
  //     {name: 'Dale Carnegie', position: "JAhn's conscience", game1: 'playing', game2: 'playing', game3: 'playing'}
  //   ];
  //   Player.insertMany(mongo, function(error) {
  //     if (error) {
  //       console.log('***** controller addInitialData error *****', error);
  //       response.json(error);
  //     } else {
  //       console.log('***** initial data added to previously empty db *****');
  //       response.json();
  //     }
  //   });
  // },


  addPlayer: function(request, response) {
    const lol = request.body;
    console.log(lol);
    Player.create(lol, function(error) {
      if (error) {
        console.log('***** controller addPlayer error *****', error);
        response.json(error);
      } else {
        console.log('***** player was added *****');
        response.json();
      }
    });
  },


  getOnePlayer: function(request, response) {
    Player.findOne({_id: request.params.id}, function(error, player) {
      if (error) {
        console.log('***** controller getOnePlayer error *****', error);
        response.json(error);
      } else {
        console.log('***** player was found *****');
        response.json(player);
      }
    });
  },


  updateOnePlayer: function(request, response) {
    console.log('***** controller updatePlayer request.body *****', request.body);
    Player.updateOne(
      {_id: request.params.id},
      request.body,
      function(error, player) {
        if (error) {
          console.log('***** controller updateOnePlayer error *****');
          response.json(error);
        } else {
          console.log('***** one player updated *****');
          response.json(player);
        }
      });
  },


  deleteOnePlayer: function(request, response) {
    Player.deleteOne({_id: request.params.id}, function(error, result) {
      if (error) {
        console.log('***** controller deleteOnePlayer error *****', error);
        response.json(error);
      } else {
        console.log('***** one player deleted *****');
        response.json(result);
      }
    });
  }



};