inlets = 1;
outlets = 1;

var mode = 2;
var maximum = 8;
var minimum = 0;

output();

function init(x, y, z){
	mode = x;
	maximum = y;
	minimum = z;
	output()
}

function increase(){
	if(mode < maximum)
		mode++;	
	output()
}

function decrease(){
	if(mode > minimum)
		mode--;
	output();
}

function output(){
	outlet(0, mode);
}