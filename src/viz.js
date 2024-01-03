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

function agent_color(a){
	const nm = param.number_of_mutants.widget.value();
	const c = param.local_capacity.widget.value();
	return nm == 0 ? d3.rgb(255*a.u/c,255*a.v/c,0,(a.u+a.v)/c) : d3.rgb(255*a.u/c,255*a.v/c,255*a.w/c,(a.u+a.v+a.w)/c)
}


const initialize = (display,config) => {

	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(0, 0, W, H);
	each(agents,a=>{
		const c = a.cell();		
		const color = agent_color(a);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
	
};

const go = (display,config) => {
	
	ctx.clearRect(1, 1, W-2, H-2);
	each(agents,a=>{
		const c = a.cell();		
		const color = agent_color(a);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
	
}


const update = (display,config) => {}


export {initialize,go,update}
