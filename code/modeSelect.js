inlets = 1;
outlets = 1;

var mode = 1;

function increase(){
	if(mode < 2){
		mode++;
		outlet(0, mode);
	}		
	
}

function decrease(){
	if(mode > 0){
		mode--;
		outlet(0, mode);	
	}
}