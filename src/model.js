// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean,filter,shuffle} from "lodash-es"
import {dist} from "./utils"
import {square} from "lattices"

// const L = param.L;
// const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var agents = [];
var activeNotEmpty = []
var boundary_set = []

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {
	// set/reset timer
	param.timer={}; param.tick=0;


	const N = Math.round(param.edge_size.widget.value());
	const V = param.number_of_mutants.widget.value() + 2; 
	const C = param.local_capacity.widget.value(); 
	const Cycle = param.start_layout.widget.value() == 0; 
	
	console.log("re-init model N=" + N )

	agents = square(N).boundary("dirichlet").nodes;
	boundary_set = filter(agents,a=>{return a.is_boundary})
	

	each(agents,a=>{
		a.ma = []
		for (var i = 0; i < V; i++) {
			a.ma[i] = 0;
		}
		a.update_flag = false;
		})
	
	let max_y = 0;
	each(agents,a=>{
			max_y = Math.max(max_y,a.y)
		
	})

	const center = filter(agents,a=>{

		if(Cycle){
			return dist(a,{x:0,y:0})<param.initial_radius.widget.value();
		}
		return a.y == max_y;
	})
	
	each(center,a=>{
		for (var i = 0; i < V; i++) {
			a.ma[i] = Math.floor(Math.random() * C / (V));
		}
		a.update_flag = true;
	})

	activeNotEmpty = shuffle(filter(agents,a=>{let sum = a.ma.reduce(function(a, b){
 				 return a + b;
			});
		return sum>0}));
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	const Cycle = param.start_layout.widget.value() == 0; 


	each(agents,a=>{
		a.update_flag=false
	})
	param.tick++;


	let active = shuffle(filter(activeNotEmpty,a=>{
		let tot = a.ma.reduce(function(a, b){
 				 return a + b;
			});
		return tot > 0 && tot < param.local_capacity.widget.value() 
	}))
	
	each(active,a=>{
		let tB = a.ma.reduce(function(a, b){
 				return a + b;
		});

		let reproduce = param.proportional_reproduction.widget.value()?
				Math.random()<param.reproduction_rate.widget.value()*(tB/param.local_capacity.widget.value()) :
				Math.random()<param.reproduction_rate.widget.value();
				
		if (reproduce){
			// pick a individum to reproduce at random  
			let pick = Math.random() * tB
			for(let i = 0; pick > 0; i++){
				if(pick <= a.ma[i]){
					a.ma[i]++
					a.update_flag=true
				}
				pick -= a.ma[i]
			}			
		}
	})
	
	
	
	
	each(activeNotEmpty,a=>{
		let tB = a.ma.reduce(function(a, b){
	 		return a + b;
		});

		let nn = shuffle(filter(a.neighbors,n=>{
				let sum = n.ma.reduce(function(a, b){
 					 return a + b;
				});
				return sum<param.local_capacity.widget.value()}))
		each(nn,n=>{
			let defuse = param.proportional_defusion.widget.value()?
				Math.random()<param.diffusion_rate.widget.value()*(tB/param.local_capacity.widget.value()) :
				Math.random()<param.diffusion_rate.widget.value();

			if (defuse){
				// pick a individum to reproduce at random
				let pick = Math.random() * tB
				for(let i = 0; pick > 0; i++){
					if(pick <= a.ma[i]){
						let tBn = n.ma.reduce(function(a, b){
	 				 		return a + b;
						});
						if(tBn == 0) {
							activeNotEmpty.push(n)
						}
						n.ma[i]++
						n.update_flag=true
						
					}
					pick -= a.ma[i]
				}
			}
		})
	})
	

	each(activeNotEmpty,a=>{
		let nn = shuffle(filter(a.neighbors,n=>{
				let sum = n.ma.reduce(function(a, b){
 					 return a + b;
				});
				return sum<param.local_capacity.widget.value()}))
		each(nn,n=>{
			let tB = a.ma.reduce(function(a, b){
	 				 return a + b;
				});

			if (Math.random()<param.diffusion_rate.widget.value()*tB/param.local_capacity.widget.value()){
				// pick a individum to reproduce at random
				
				let pick = Math.random() * tB
				for(let i = 0; pick > 0; i++){
					if(pick <= a.ma[i]){
						let tBn = n.ma.reduce(function(a, b){
	 				 		return a + b;
						});
						if(tBn == 0) {
							activeNotEmpty.push(n)
						}
						n.ma[i]++
						n.update_flag=true
						
					}
					pick -= a.ma[i]
				}
			}
		})
	})

	if(Cycle){
	return filter(boundary_set,b=>{
			let sum = b.ma.reduce(function(a, b){
 				 return a + b;
			});
			return sum>0}).length > 0
	}
	return false

}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	//each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
