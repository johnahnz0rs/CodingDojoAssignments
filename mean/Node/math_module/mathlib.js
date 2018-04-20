module.exports = function() {
	return {
		add: function(num1, num2) {
			return `${num1} + ${num2} = ${num1 + num2}`;
		},
		multiply: function(num1, num2) {
			return `${num1} * ${num2} = ${num1 * num2}`;
		}, 
		square: function(num) {
			return `${num} ^ 2 = ${num * num}`;
		},
		random: function(num1, num2) {
			return `Random number between ${num1} and ${num2}: ${Math.floor((Math.random() * (num2-num1) + num1))}`;
		}
	}
};