import param from "./parameters.js"
import {each,range,map,mean,filter,shuffle} from "lodash-es"
import {dist} from "./utils"
import {square} from "lattices"

var agents = [];
var boundary_set = []


const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	const N = param.N;
	const V = param.number_of_mutants.widget.value(); 
	const C = param.local_capacity.widget.value(); 
	
	agents = square(N).boundary("dirichlet").nodes;
	boundary_set = filter(agents,a=>{return a.is_boundary})
	

	each(agents,a=>{a.u=0,a.v=0,a.w=0})
	
	const center = filter(agents,a=>{
		return dist(a,{x:0,y:0})<param.initial_radius.widget.value();
	})
	
	each(center,a=>{
		a.u = Math.floor(Math.random() * C / (V + 2));
		a.v = Math.floor(Math.random() * C / (V + 2));
		a.w = V == 0 ? 0 : Math.floor(Math.random() * C / (V + 2));		
	})
	
};


const go  = () => {
	
	param.tick++;
	
	let active = shuffle(filter(agents,a=>{
		let tot = a.u + a.v + a.w;
		return tot > 0 && tot < param.local_capacity.widget.value() 
	}))
	
	each(active,a=>{
		if (Math.random()<param.reproduction_rate.widget.value()){
			if(Math.random() < a.u / (a.v + a.u + a.w)) {
				a.u++;
			} else {
				if(Math.random()< a.v / (a.v + a.w) ) {
					a.v++;
				} else {
					a.w++;
				}
			}
		}
	})
	
	active = shuffle(filter(agents,a=>{return a.u + a.v + a.w > 0}));
	
	each(active,a=>{
		let nn = shuffle(filter(a.neighbors,n=>{return n.u+n.v+n.w<param.local_capacity.widget.value()}))
		each(nn,n=>{
			if (Math.random()<param.diffusion_rate.widget.value()){
				if(Math.random() < a.u / (a.v + a.u + a.w)) {
					n.u++;
				} else {
					if (Math.random() < a.v / (a.v + a.w)) {
						n.v++
					} else {
						n.w++
					} 
				}
			}
		})
	})
	
	return filter(boundary_set,b=>{return b.v+b.w+b.u>0}).length>0
}

const update = () => {}

export {agents,initialize,go,update}
