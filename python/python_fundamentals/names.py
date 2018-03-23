# Part I
# Given the following list, create a program that outputs:
students = [
     {'first_name' : 'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
# desired output:
	# Michael Jordan
	# John Rosales
	# Mark Guillen
	# KB Tonel

# helper function to be called in print_names()
def return_print_string(obj):
	name = ''
	for key in obj:
		name += obj[key] + ' '
	name = name.rstrip()
	return name

#####
#####
# RUN THIS TO COMPLETE PART I
#####
#####
def print_names(array):
	for dictionary in array:
		print return_print_string(dictionary)
		print len(return_print_string(dictionary))
# print_names(students) 


# Part II
# Now, given the following dictionary:
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
# Create a program that prints the following format (including number of characters in each combined name):
# desired output:
	# Students
	# 1 - MICHAEL JORDAN - 13
	# 2 - JOHN ROSALES - 11
	# 3 - MARK GUILLEN - 11
	# 4 - KB TONEL - 7
	# Instructors
	# 1 - MICHAEL CHOI - 11
	# 2 - MARTIN PURYEAR - 13


#####
#####
# RUN THIS TO COMPLETE PART I
#####
#####
def print_students_instructors(dictionary):
	for key in dictionary:
		item = ''
		print key
		i = 1
		for obj in dictionary[key]:
			name = return_print_string(obj).upper()
			output = str(i) + ' - ' + name + ' - ' + str(len(name) - 1)
			i += 1
			print output
# print_students_instructors(users)

