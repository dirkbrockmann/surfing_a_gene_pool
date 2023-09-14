// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import {each} from "lodash-es"


const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

var ctx,dL,W,H;

let colors = []
colors[0] = [1,0,0]
colors[1] = [0,1,0]
colors[2] = [0,0,1]
colors[3] = [0.5,0.5,0]
colors[4] = [0.5,0,0.5]
colors[5] = [0,0.5,0.5]


function agent_color(a){
	const nm = param.number_of_mutants.widget.value();
	const c = param.local_capacity.widget.value();

	let color = [0, 0, 0]
	for (var i = 0; i < nm+2; i++) {
		color[0] += (colors[i][0] * (a.ma[i] / c))
		color[1] += (colors[i][1] * (a.ma[i] / c))
		color[2] += (colors[i][2] * (a.ma[i] / c))
	}
	
	let tB = a.ma.reduce(function(a, b){
 				 return a + b;
	});  

	color[0] = 1  - (tB/c) * (1-color[0])
	color[1] = 1  - (tB/c) * (1-color[1])
	color[2] = 1  - (tB/c) * (1-color[2])

	return d3.rgb(255*color[0],255*color[1],255*color[2])
}

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display,config) => {

	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(1, 1, W-2, H-2);
	each(agents,a=>{
		const c = a.cell();		
		const color = agent_color(a);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	let drawn = 0
	each(agents,a=>{
		if(a.update_flag){
			const c = a.cell();		
			const color = agent_color(a);
		
			ctx.fillStyle=color;
			ctx.strokeStyle=color;
			ctx.lineWidth = 0;
			ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
			drawn++
		}
	})
	
	// ctx.strokeStyle = "black";
	// ctx.lineWidth = 4;
	// ctx.strokeRect(0, 0, W, H);
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	// display.selectAll(".node")
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}


export {initialize,go,update}
