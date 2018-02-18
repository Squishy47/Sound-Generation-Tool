inlets = 1;
outlets = 1;

function welchWindow(n){
	var partA = n - ((n-1)/2);
	var partB = (n-1)/2;
	
	var partC = partA/partB;
	var partD = (1 - partC);
	var partE = (partD*partD);
	
	outlet(0, partE);
}


function hannWindow(n){
	var partA = 0.5*(1-Math.cos((2*Math.PI*n)/127))
	outlet(0, partA);	
}