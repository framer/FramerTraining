flow = new FlowComponent
flow.showNext(screenA)

flow.header = nav

screenA.onTap ->
	flow.showNext(screenB)
	
screenB.onTap ->
	flow.showNext(screenC)
	
screenC.onTap ->
	flow.showNext(screenA)	