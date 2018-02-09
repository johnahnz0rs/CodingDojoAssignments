
# Multiples: Part I
# Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.
def multiples_part_i():
	for x in range(1, 1001):
		if x % 2 != 0:
			print x
		else:
			continue
# multiples_part_i(1, 1000)





# Mutiples: Part II
# Create another program that prints all the multiples of 5 from 5 to 1,000,000.
def multiples_part_ii():
	for x in range(5, 1000001):
		if x % 5 == 0:
			print x
		else:
			continue
# multiples_part_ii()





# Sum List
# Create a program that prints the sum of all the values in the list: 
a = [1, 2, 5, 10, 255, 3]
def return_sum(list):
	return sum(list)
# print return_sum(a)




# Average List
# Create a program that prints the average of the values in the list: 
b = [1, 2, 5, 10, 255, 3]
def return_average(list):
	return return_sum(list) / len(list)
# print return_average(b)


