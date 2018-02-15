def find_characters(array, find_this):
	output = []
	for x in range(0, len(array)):
		if array[x].find(find_this) != -1:
			output.append(array[x])
	print output
	return


# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
# new_list = ['hello','world']


# find_characters(word_list, char)