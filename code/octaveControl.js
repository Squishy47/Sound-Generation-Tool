inlets = 1;
outlets = 1;

var octave = 1;

function increase(x){
	if(octave < 5){
		octave = octave*2;
		outlet(0, octave);	
	}	
}

function decrease(x){
	if(octave > 0.0625){
		octave = octave/2;
		outlet(0, octave);	
	}
}