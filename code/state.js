inlets = 1;
outlets = 1;

var value = 0;

function state(){
	
	if(value == 0)
		value = 1;
	else
		value = 0;
	
	outlet(0, value)
}