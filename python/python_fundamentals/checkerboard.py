def checkerboard():
	log1 = ''
	log2 = ''
	for x in range(0, 8):
		if x % 2 == 0:
			log1 += '*'
			log2 += '  '
		else:
			log1 += '  '
			log2 += '*'
	for row in range(0, 8):
		if row % 2 == 0:
			print log1
		else:
			print log2

checkerboard()