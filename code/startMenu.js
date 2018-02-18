mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

inlets = 1;
outlets = 2;

var fontSize = 20;
var alpha = 0;
var boxes = {
	titles:{
		x: [],
		y: [],
		width: 125,
		height: 50,
		fontSize: 25,
		textItem: ["Mode"],
	},
	listOne:{
		x: [],
		y: [],
		width: 100,
		height: 50,
		fontSize: 20,
		textItem: ["Record","Granulate","Global"],
		selected: 0,
	},
	background:{
		x: 0,
		y: 0,
		width: 1000,
		height: 1000,
	}
}

var draw = {
	titles: {
		text: function(){
			with(mgraphics){
				for(var i = 0; i < boxes.titles.textItem.length; i++){        
					select_font_face("arial");
					set_font_size(boxes.titles.fontSize);
					set_source_rgba(0, 0, 0, alpha);
					move_to(boxes.titles.x[i]+20, boxes.titles.y[i]/2 );
					text_path(boxes.titles.textItem[i]);
					fill();
				}
			}
		},
		boxes: function() {
			with(mgraphics){
				for(var i = 0; i < boxes.titles.textItem.length; i++){  
					// set_source_rgb(0, 0, 0);      
					// rectangle(boxes.titles.x[i], boxes.titles.y[i], boxes.titles.width, boxes.titles.height);
					// stroke();
				}
			}
		},
		calculatePositions: function(){
			for(var i = 0; i < boxes.titles.textItem.length; i++){
				boxes.titles.x[i] = i * boxes.titles.width;
				boxes.titles.y[i] = boxes.titles.height;
			}
		},
		render: function(){
			draw.titles.calculatePositions();
			draw.titles.text();
			draw.titles.boxes();
		},
	},
	listOne: {
		text: function(){
			with(mgraphics){
				for(var i = 0; i < boxes.listOne.textItem.length; i++){  
					if(i == boxes.listOne.selected) {
						set_source_rgba(1, 0.6, 0, alpha);
					}
					else{
						set_source_rgba(0, 0, 0, alpha);
					}
					
					select_font_face("arial");
					set_font_size(boxes.listOne.fontSize);
					
					move_to(boxes.listOne.width/2 - 40, boxes.listOne.y[i] + (boxes.listOne.height/2) + boxes.listOne.fontSize/3.57);
					text_path(boxes.listOne.textItem[i]);
					fill();
				}
			}
		},
		boxes: function() {
			with(mgraphics){
				for(var i = 0; i < boxes.listOne.textItem.length; i++){ 
					
					set_source_rgba(0, 0, 0, alpha);      
					rectangle(boxes.listOne.x[i], boxes.listOne.y[i], boxes.listOne.width, boxes.listOne.height);
					stroke();
				}
			}
		},
		calculatePositions: function(){
			for(var i = 0; i < boxes.listOne.textItem.length; i++){
				boxes.listOne.x[i] = 0;
				boxes.listOne.y[i] = i * boxes.listOne.height + boxes.listOne.height
			}
		},
		render: function(){
			draw.listOne.calculatePositions();
			draw.listOne.text();
			draw.listOne.boxes();
		},
	},
	background:{
		boxes: function(){
			with(mgraphics){
				if(alpha > 0.95)
					set_source_rgba(0.239, 0.255, 0.278, 0.95);  
				else
					set_source_rgba(0.239, 0.255, 0.278, alpha); 
				rectangle(boxes.background.x, boxes.background.y,boxes.background.width,boxes.background.height);
				fill();
			}
		},

		render: function(){
			draw.background.boxes();
		}
	},
}

function increase(){
	if(boxes.listOne.selected > 0)
		boxes.listOne.selected--
	else boxes.listOne.selected = boxes.listOne.textItem.length - 1;	
	outlet(0, boxes.listOne.selected);
	mgraphics.redraw();
}

function decrease(){
	if(boxes.listOne.selected < boxes.listOne.textItem.length - 1)
		boxes.listOne.selected++
	else boxes.listOne.selected = 0;
	outlet(0, boxes.listOne.selected);
	mgraphics.redraw();
}

function paint(){
	draw.background.render();	
	draw.titles.render();
	draw.listOne.render();
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