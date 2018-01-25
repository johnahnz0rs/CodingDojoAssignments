function canIHaveTheTime(h, m, p) {
	var nextHour = h + 1;
	if (m <= 30) {
		if (p.toLowerCase() == 'am') {
			return 'It\'s just after' + h + ' in the morning';
		} else {
			return 'It\'s just after ' + h + ' in the evening';
		}
	} else {
		if (p.toLowerCase() == 'am') {
			return 'It\'s almost ' + nextHour + ' in the morning';
		} else {
			return 'It\'s almost ' + nextHour + ' in the evening';
		}
	}
}



/*
//test cases
if (canIHaveTheTime(8, 50, 'AM') == 'It\'s almost 9 in the morning') {
	console.log('Correct');
} else {
	console.log("Error");
}


if (canIHaveTheTime(7, 15, 'PM') == 'It\'s just after 7 in the evening') {
	console.log('Correct');
} else {
	console.log("Error");
}
*/