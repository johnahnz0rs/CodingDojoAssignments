# Create a dictionary containing some information about yourself. The keys should include name, age, country of birth, favorite language.

johnahnz0rs = {"name" : "johnahnz0rs", "age" : "31", "country of birth" : "The ROK", "favorite language" : "Bad English"}

def make_and_read_dicts(dictionary):
	for pair in dictionary:
		# print pair
		print "My " + pair + " is " + dictionary[pair]

make_and_read_dicts(johnahnz0rs)