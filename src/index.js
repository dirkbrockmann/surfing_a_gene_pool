// this is the main file for the explorable that get's executed when the exporable is loaded

import './styles.css'
import cfg from "./container_config.js" // imports default classes and styles and parameters for the container
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"

// load is called in the webpage
// the container configuration can be passed as an argument, including classes and styles for the 
// display and controls container. The defaults for this are imported above

// the function below usually doesn't have to change structurally. It is advisable to comment
// out steps from below to work on the code that is called sequentially

const load = function (container_id,config=cfg) {
	
// setting up the container
	
	const container = setup_container(container_id,config);

	const display = container.display;
	const controls = container.controls;
	const grid = container.grid;
		
// setting up the controls and actions
	
	setup_controls(controls,grid); // this adds the actual widgets to the control panel, and connects controls to the parameters for later access
	
	setup_interactions(display,controls,config); // this connects actions to the widgets, like starting the simulation, pausing it, resetting variables, anything connected to the change of a widget state.

// initializing the system
	
	setup_simulation(display,config)
	
}

export {load,cfg as config};
