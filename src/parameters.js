// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		edge_size: {
			range:[50,300],
			default : 100
		},
		diffusion_rate: {
			range:[0.05,0.3],
			default:0.1
		},
		proportional_defusion:{
			default : false
		},
		proportional_reproduction:{
			default : false
		},
		reproduction_rate:{
			range : [0.05,1],
			default : 0.3
		},
		local_capacity:{
			range : [5,50],
			default : 20
		},
		initial_radius:{
			range : [0.01,0.4],
			default : 0.15
		},
		number_of_mutants : {
			choices:["2","3", "4", "5", "6 Mutants"],
		default:0
		},
		start_layout : {
			choices:["Circle","Line"],
			default:0
		}
}

