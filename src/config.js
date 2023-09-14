// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.5,
		slider_girth:13,
		slider_knob:15,
		slider_anchor: {x:1,y:13},
		playbutton_size: 120,
		button_size:70,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:10,y:2},
		resetbutton_anchor:{x:7,y:2},
		radio_anchor:{x:3,y:5},
		radio_size:200,
		radio_buttonsize:35,
		radio_orientation:"horizontal",
		radio_label_position:"right",
		radio_shape:"round",
		toggle_anchor: {x:4,y:9},
		fontsize:20
	},
	simulation: {
		delay:0
	}
}