Framer.Defaults.Animation =
	time: 0.5
	curve: Spring(0.8)
	
track.states.active = 
	backgroundColor: trackActive.backgroundColor

knob.states.active =
	x: knobActive.x

track.onTap ->
	track.stateCycle()
	knob.stateCycle()