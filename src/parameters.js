// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:100,
		diffusion_rate: {
			range:[0.05,0.3],
		default:0.1
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
			choices:["2 Mutants","3 Mutants"],
		default:0
		}
}

