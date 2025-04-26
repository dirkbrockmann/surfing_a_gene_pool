// this contains information on the containers, the display and controls. It's essentially
// for the display and geometry of the explorable. An object like the one below can also
// be passed to the load() method defined in index.js.

export default {
	display_type:"canvas", // either svg or canvas depending on explorable
	debug:false,  // if set to true, draws dots on the control panel to help widget placement
	controls_border:"",
	display_border:"1px solid black",
	debug_lattice:"debug-grid-16",
	controls_grid:{nx:12,ny:12},
	display_size: {width:804,height:804},
	controls_size: {width:480,height:480},
	display_class:" tw:p-0",
	controls_class:"tw:p-0",
	container_class:"tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
}

