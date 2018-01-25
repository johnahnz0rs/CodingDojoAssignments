var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray(array) {
	for (var i = 0; i < array.length; i++) {
		return (i + " -> " + array[i]);
	}
}

/*
//test case
if (fancyArray(arr) == "0 -> James", "1 -> Jill", "2 -> Jane", "3 -> Jack") {
	console.log("Correct");
} else {
	console.log("Error");
}
*/





//user-submitted separator symbol
function fancyArray(array, symbol) {
	for (var i = 0; i < array.length; i++) {
		return (i + " " + symbol + " " + array[i]);
	}
}

/*
//test case w/ '>>' separator symbol
if (fancyArray(arr, ">>") == "0 >> James", "1 >> Jill", "2 >> Jane", "3 >> Jack") {
	console.log("Correct");
} else {
	console.log("Error");
}
//test case w/ '**' separator symbol
if (fancyArray(arr, "**") == "0 ** James", "1 ** Jill", "2 ** Jane", "3 ** Jack") {
	console.log("Correct");
} else {
	console.log("Error");
}
*/



//user-submitted separator symbol && reverse order
function fancyArray(array, symbol, reversed) {
	if (!reversed) {
		for (var i = 0; i < array.length; i++) {
			return (i + " " + symbol + " " + array[i]);
		}
	} else {
		for (var i = array.length - 1; i >= 0; i--) {
			return (i + " " + symbol + " " + array[i]);
		}
	}
}

/*
//test case: fancyArray(arr, '>>', false)
if (fancyArray(arr, ">>", false) == "0 >> James", "1 >> Jill", "2 >> Jane", "3 >> Jack") {
	console.log("Correct");
} else {
	console.log("Error");
}
//test case: fancyArray(arr, "**", true)
if (fancyArray(arr, "**", true) ==  "3 ** Jack", "2 ** Jane", "1 ** Jill", "0 ** James") {
	console.log("Correct");
} else {
	console.log("Error");
}
*/