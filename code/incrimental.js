inlets = 1;
outlets = 1;

var counter = 0;
var tempCounter = 0;

function main(currentValue){
	
	if(currentValue > tempCounter){
		counter++;
		tempCounter = counter;
	}
	else{
		counter--;
		tempCounter = counter;
	}
	
	outlet(0, counter);
}


