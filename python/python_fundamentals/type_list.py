# test cases
a = ['magical unicorns',19,'hello',98.98,'world']
b = [2,3,1,7,4,12]
c = ['magical','unicorns']

def type_list(list):
	output_string = ''
	output_sum = 0.0
	for element in list:
		if isinstance(element, str):
			output_string += element + ' '
		elif isinstance(element, int):
			output_sum += element
		elif isinstance(element, float):
			output_sum += element

	if len(output_string) != 0 and output_sum == 0:
		print "The list you entered is of string type"
		print "String:", output_string.rstrip()

	elif len(output_string) == 0 and output_sum != 0:
		print "The list you entered is of integer type"
		if output_sum * 10 % 10 == 0:
			print "Sum:", int(output_sum)
		else: print "Sum:", output_sum

	elif len(output_string) != 0 and output_sum != 0:
		print "The list you entered is of mixed type"
		print "String:", output_string.rstrip()
		if output_sum * 10 % 10 == 0:
			print "Sum:", int(output_sum)
		else: print "Sum:", output_sum



# type_list(a)
# type_list(b)
# type_list(c)
