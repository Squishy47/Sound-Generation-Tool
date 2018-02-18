mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

inlets = 1;
outlets = 0;

var width = 630;
var height = 270;
var particles = [];
var theta = 0;

var origin = {
	x: width / 2,
	y: height / 2,
}

var bgColour = {
	r: 0.239,
	g: 0.255,
	b: 0.278,
	a: 1,
	fadeAmount: 0.09,
}

var particle = function(value){
	var temp = polToCar(width * 4 * Math.random(), Math.random() * 360);
	this.x = temp[0];
	this.y = temp[1];
	this.width = value;
	this.height = value;
	this.colour = {
		r: 1 ,
		g: 0.6,
		b: 0,
		a: 1,
	}
	this.age = 0;
}

function create(numberOfParticles, particleSize){
	for(var i = 0; i < numberOfParticles; i++)
		particles.push(new particle(particleSize));

	mgraphics.redraw();
}

function paint(){
	drawBackground();
	for(var i = 0; i < particles.length; i++){
		particleAge(particles[i], i);
		calculationMovement(particles[i], i);
		
		mgraphics.set_source_rgba(particles[i].colour.r, particles[i].colour.g, particles[i].colour.b, particles[i].colour.a); 
		mgraphics.ellipse(particles[i].x, particles[i].y, particles[i].width, particles[i].height)
		mgraphics.fill();
	}	
}

function drawBackground(){
	mgraphics.set_source_rgba(bgColour.r, bgColour.g, bgColour.b, bgColour.a); 
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();
}

function particleAge(obj, i){
	obj.age++;
	
	obj.colour.a = calculateDistance(obj);

	if(obj.age > 100)
		particles.splice(i, 1);
}

function calculationMovement(obj, i){
	xMovement = (origin.x - obj.x)/10
	yMovement = (origin.y - obj.y)/10

	obj.width -= 0.0001;
	obj.height -= 0.0001;


	if(obj.x > origin.x)
		obj.x += xMovement
	else obj.x += xMovement
	
	if(obj.y > origin.y)
		obj.y += yMovement
	else obj.y += yMovement
}

function calculateDistance(obj){
	x1 = origin.x;
	x2 = obj.x;

	y1 = origin.y;
	y2 = obj.y;
	
	x = Math.pow(x2 - x1, 2);
	y = Math.pow(y2 - y1, 2);
	z = Math.sqrt(x + y);
	
	return z / ((width + height) / 2);
}

function polToCar(r, theta){
	return [Math.cos(theta) * r, Math.sin(theta) * r]	
}

function moveOrigin(){
	if(theta < 2*pi) theta+=0.01
	else theta = 0;
		
	origin.x = Math.cos(theta) * 1
	origin.y = Math.sin(theta) * 1
}



