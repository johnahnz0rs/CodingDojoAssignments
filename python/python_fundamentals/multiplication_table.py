def multiplication_table():
	header = 'x      1   2   3   4   5   6   7   8   9  10  11  12'
	print header
	print ' '
	for i in range(0, 13):
		print produce_product(i)




def produce_product(number):
	string = str(number)
	if number <= 9:
		string += '   '
	else: string += '  '
	for i in range(1, 13):
		if len(str(number * i)) == 3:
			string += ' '
		elif len(str(number * i)) == 2:
			string += '  '
		elif len(str(number * i)) == 1:
			string += '   '
		string += str(number * i)
	return string


# print produce_product(2)
multiplication_table()


