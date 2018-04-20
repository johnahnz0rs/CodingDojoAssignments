function fib() {
	// Some variables here
	let numbers = [0];
	function nacci() {
		// do something to those variables here
		if (numbers.length == 1) {
			numbers.push(1);
		} else {
			numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2]);
		}
		console.log(numbers[numbers.length-1]);
		console.log(numbers);
	}
	return nacci;
}

const fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
