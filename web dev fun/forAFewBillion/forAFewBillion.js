// this is the servant's reward after 30 days: $10,737,418.23
function rewardAfter30Days() { 
	var day = 1;
	var reward = 0.01;
	var sum = 0;

	for (var day; day <= 30; day++) {
		if (day == 30) {
			sum += reward;
			return ('TOTAL reward is $' + sum + '; and today\'s reward is $' + reward);
		} else {
			sum += reward;
			reward *= 2;
		}
	}
}
//onsole.log(rewardAfter30Days());




//this is how many days it would take for the servant to be rewarded $10,000: 21 days.
function forTenGrand() {
	var day = 1;
	var reward = 0.01;
	for (var reward; reward <= 10000; reward *= 2) {
		//console.log('day ' + day + '= $' + reward);
		day++;

	}
	return("It would take " + day + " days to earn at least $10,000 ($" + reward + " to be exact).");
}
//console.log(forTenGrand());




//this is how many days it would take for the servant to be rewarded $1,000,000,000: 38 days.
function forABillion() {
	var day = 1;
	var reward = 0.01;
	for (var reward; reward <= 1000000000; reward *= 2) {
		//console.log('day ' + day + '= $' + reward);
		day++;

	}
	return("It would take " + day + " days to earn at least $1,000,000,000 ($" + reward + " to be exact).");
}
//console.log(forABillion());




//inconclusive: no output.
function forInfinity() {
	var day = 1;
	var reward = 0.01;
	for (var reward; reward <= Infinity; reward *= 2) {
		//console.log('day ' + day + '= $' + reward);
		day++;

	}
	return("It would take " + day + " days to earn at least Infinity dollars" /*($" + reward + " to be exact)."*/);
}
//console.log(forInfinity());