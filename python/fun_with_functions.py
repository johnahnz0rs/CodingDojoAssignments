# Create a function called odd_even that counts from 1 to 2000. As your loop executes have your program print the number of that iteration and specify whether it's an odd or even number.
def odd_even():
	for i in range(1,2001):
		if i % 2 != 0:
			print "Number is", i, ". This is an odd number."
		else:
			print"Number is", i, ". This is an even number."

# odd_even()




# Create a function called 'multiply' that iterates through each value in a list (e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5.
def multiply(list, multiplier):
	output = []
	for element in list:
		 output.append(element * multiplier)
	return output

a = [2, 4, 10, 16]
# print multiply(a, 5)



# Write a function that takes the multiply function call as an argument. Your new function should return the multiplied list as a two-dimensional list. Each internal list should contain the 1's times the number in the original list.
def layered_multiples(list):
	output = [];
	for i in range(0, len(list)):
		temp = []
		for x in range(0, list[i]):
			temp.append(1)
		output.append(temp)
	return output

# print layered_multiples(multiply([2,4,5], 3))

