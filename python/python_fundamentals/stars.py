# Stars

# Part I
	# Create a function called draw_stars() that takes a list of numbers and prints out *.

def draw_stars(list):
	for element in list:
		temp = ''
		for i in range(0, element):
			temp += '*'
		print temp
	return

x = [4, 6, 1, 3, 5, 7, 25]
# draw_stars(x)




# Part II
	# Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

def draw_stars_2(list):
	for element in list:
		temp = ''
		if type(element) == int:
			for i in range(0, element):
				temp += '*'
		elif type(element) == str:
			for i in range(0, len(element)):
				temp += element[0].lower()
		print temp
	return

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
# draw_stars_2(y)