# Write a function that simulates tossing a coin 5,000 times. Your function should print how many times the head/tail appears.

# Sample output should be like the following:
	# Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
	# ...
	# Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far


def coin_tosses():
	import random
	heads = 0
	tails = 0
	for i in range(1, 5001):
		temp = random.random()
		if round(temp) == 0: # 0 is heads
			heads += 1
			print "Attempt #" + str(i) + ": Throwing a coin... It's a head! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
		else: #1 is tails
			tails += 1
			print "Attempt #" + str(i) + ": Throwing a coin... It's a tail! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
	return

coin_tosses()