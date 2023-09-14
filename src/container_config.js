// this contains information on the containers, the display and controls. It's essentially
// for the display and geometry of the explorable. An object like the one below can also
// be passed to the load() method defined in index.js.

export default {
	display_type:"canvas", // either svg or canvas depending on explorable
	debug:false,  // if set to true, draws dots on the control panel to help widget placement
	controls_border:false,
	display_border:true,
	debug_lattice:"debug-grid-16",
	controls_grid:{nx:12,ny:18},
	display_size: {width:804,height:804},
	controls_size: {width:480,height:580},
	display_class:"fl w-100 w-50-ns pa2 ph3-ns",
	controls_class:"fl w-100 w-50-ns pa2 ph3-ns",
	container_class:"mw8 center cf"
}

