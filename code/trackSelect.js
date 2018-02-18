inlets = 1;
outlets = 1;

var mode = 1;
var maximum = 4;
var minimum = 1;

output();

function increase(){
	if(mode < 4)
		mode++;	
	else mode = 1;
	
	output();
}

function decrease(){
	if(mode > 1)
		mode--;
	else mode = 4
	
	output();
}

function output(){
	outlet(0, mode);
}

function setMinMax(x, y, z){
	maximum = x;
	minimum = y;
	mode = z;
}