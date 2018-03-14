slider = new SliderComponent
	width: 200
	height: 5
	y: 400
	x: Align.center 
	
slider.fill.backgroundColor = "#05F"

slider.onValueChange ->
	value = Utils.modulate(slider.value, [0, 1], [0, 360])
	cog.rotation = value 