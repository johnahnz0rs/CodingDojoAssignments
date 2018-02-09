# Write a function that generates ten scores between 60 and 100. Each time a score is generated, your function should display what the grade is for a particular score. Here is the grade table:
	# Score: 60 - 69; Grade - D
	# Score: 70 - 79; Grade - C
	# Score: 80 - 89; Grade - B
	# Score: 90 - 100; Grade - A


def scores_and_grades():
	import random 
	print "Scores and Grades"
	for x in range(0,10):
		temp = random.randint(60, 100)
		print "Score: " + str(temp) + "; Your grade is " + find_grade(temp)
	print "End of the program. Bye!"
	return


# enter a number score, get a letter grade
def find_grade(score):
	if score >= 60 and score <=69:
		return 'D'
	elif score >= 70 and score <= 79:
		return 'C'
	elif score >= 80 and score <= 89:
		return 'B'
	elif score >= 90 and score <= 100:
		return 'A'


# scores_and_grades()