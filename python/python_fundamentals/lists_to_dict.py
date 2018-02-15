# Assignment: Making Dictionaries
# Create a function that takes in two lists and creates a single dictionary. The first list contains keys and the second list contains the values. Assume the lists will be of equal length.
# Your first function will take in two lists containing some strings. Here are two example lists:
# If the lists are of unequal length, the longer list should be used for the keys, the shorter for the values.

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def lists_to_dict(list1, list2):
	if len(list1) >= len(list2):
		zipped = zip(list1, list2)
	else: 
		zipped = zip(list2, list1)
	new_dict = dict(zipped)
	return new_dict

print lists_to_dict(name, favorite_animal)