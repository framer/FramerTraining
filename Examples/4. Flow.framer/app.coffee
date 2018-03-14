flow = new FlowComponent

flow.header = nav
flow.footer = tab
flow.showNext(home)

icon.onTap ->
	flow.showOverlayLeft(menu)