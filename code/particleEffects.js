mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

inlets = 1;
outlets = 2;

var width = 210;
var height = 210;
var alpha = 0;

var fontSize = 20;
var alpha = 0;
var particles = [];

var particle = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	age: 0,
}

function createParticles(){
	particles.push(particle);
	mgraphics.redraw();
}

function paint(){
	drawBackground();
	//createParticles();
	
	for(var i = 0; i < particles.length; i++){
		with(mgraphics){
			set_source_rgba(1, 0, 0, 1);      
			rectangle(particles[i].x, particles[i].y, particles[i].width, particles[i].height);
			fill();
		}		
	}
}

function drawBackground(){
	with(mgraphics){
		set_source_rgba(0, 0, 0, alpha);      
		rectangle(0, 0, width, height);
		fill();
	}
}


function fadeIn(){
	if(alpha < 1) alpha+= 0.01;
	else outlet(1, "fadeIn");
	
	mgraphics.redraw();
}

function fadeOut(){
	if(alpha > 0) alpha-= 0.01;
	else outlet(1, "fadeOut");

	mgraphics.redraw();
}





/*
function fadeIn(){
	if(alpha < 1) alpha+= 0.01;
	else outlet(1, "fadeIn");
	
	mgraphics.redraw();
}

function fadeOut(){
	if(alpha > 0) alpha-= 0.01;
	else outlet(1, "fadeOut");

	mgraphics.redraw();
}
*/