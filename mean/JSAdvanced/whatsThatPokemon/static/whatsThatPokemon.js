

$(document).ready(function() {
	console.log("johnahnz0rs is l33t");

	// load pokemon images
		// get pokemon id's
	for (var i = 1; i <= 151; i++) {
		$(".poke-img").append(`<img id="${i}" alt="Pokemon #${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`);
	}

	$("img").click(function() {
		var pokeID = $(this).attr("id");
		$.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`, function(res){

			var htmlString = "";
			var pokeName = res.name;
			var pokeTypes = res.types;
			var pokeHeight = res.height;
			var pokeWeight = res.weight;
			var nameCap = '';
			for (var i = 0; i < pokeName.length; i++) {
				if (i == 0) {
					nameCap += pokeName[i].toUpperCase();
				} else {
					nameCap += pokeName[i];
				}
			}
			htmlString += '<h2>' + nameCap + '</h2>' + `<img alt="Pokemon #${pokeID}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png">` + '<h3>Types</h3> <ul>';
			for (var i = 0; i < pokeTypes.length; i++) {
				htmlString += '<li>'+pokeTypes[i].type.name+'</li>';
			}
			htmlString += '</ul> <h3>Height</h3>' + pokeHeight + '<h3>Weight</h3>' + pokeWeight;
			//console.log(htmlString);
			$('.info').html(htmlString);
		}, 'json');
			
	});

});