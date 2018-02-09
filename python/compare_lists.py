def compare_lists(one, two):
	if len(one) != len(two):
		print "The lists are not the same"
		return
	else:
		for x in range(0, len(one)):
			if one[x] != two[x]:
				print "The lists are not the same"
				return
		print "The lists are the same"
		return



a = [1,2,5,6,2]
b = [1,2,5,6,2]

c = [1,2,5,6,5]
d = [1,2,5,6,5,3]

e = [1,2,5,6,5,16]
f = [1,2,5,6,5]

x = ['celery','carrots','bread','milk']
y = ['celery','carrots','bread','cream']


compare_lists(a, b)
compare_lists(c,d)
compare_lists(e, f)
compare_lists(x, y)
