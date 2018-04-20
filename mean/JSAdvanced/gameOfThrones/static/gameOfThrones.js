$(document).ready(function() {
	// name
	// words
	// titles

	$.get("https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/houses.json", getHouseDetails, "json");

	const houses = {};
	function getHouseDetails(data) {
		for (let i = 0; i < data.length; i++) {
			if (data[i]["Name"] == "House Lannister of Casterly Rock") {
				houses["lannister"] = data[i];
			} else if (data[i]["Name"] == "House Stark of Winterfell") {
				houses["stark"] = data[i];
			} else if (data[i]["Name"] == "House Targaryen of King's Landing") {
				houses["targaryen"] = data[i];
			} else if (data[i]["Name"] == "House Baratheon of Storm's End") {
				houses["baratheon"] = data[i];
			}
		}
		return this;
	}

	console.log('johnahnz0rs is l33t');
	console.log(houses);
	function htmlThatHouse() {
		let container = document.getElementById("container");
		let html_string = `<div id='house_details'><h3>House Details</h3><p><span class="font-weight-bold">Name: </span>${ houses[this.id]['Name'] }</p><p><span class="font-weight-bold">Words: </span>${ houses[this.id]['Words'] }</p><p><span class="font-weight-bold">Titles: </span>${ houses[this.id]['Titles'] }</p></div>`
		// console.log(html_string);
		if ($("#house_details").length) {
			$('#house_details').replaceWith(html_string);
		} else {
			$(container).append(html_string);
		}
		return this;
	}

	$("img").click(htmlThatHouse);
	









});