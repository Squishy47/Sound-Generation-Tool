inlets = 1;
outlets = 2;

var xCal = 10;
var yCal = 10;
var xpos = 0;
var ypos = 0;

var xCalibrationArray = [];
var yCalibrationArray = [];

var previousXValue = 0;

var averageXMeanOverThreeSeconds = [];

var timerTracker = 0;

function main(x, y){

	if(x == previousXValue){

	}
}

function timer(){
	if(timerTracker < 10){
		xCalibrationArray[timerTracker] = xpos;
		timerTracker++;		
	}
	else{
		outlet(1, 0);
		calculateMean();
	}
	repeater()
}

function calculateMean(){
	var xSum = 0;
	for(var i = 0; i < xCalibrationArray.length; i++){
		xSum += xCalibrationArray[i];
	}
	var xMean = xSum / xCalibrationArray.length;

	outlet(0, 10 - xMean);
}






