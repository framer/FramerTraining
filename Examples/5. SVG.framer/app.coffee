for path, index in [outer, mid, inner]
	path.strokeEnd = 0
	path.opacity = 0
	
	path.animate
		opacity: 1
		options: 
			time: 2.5
			
	path.animate
		strokeEnd: path.length
		options:
			time: 5
			delay: 0.1 * index