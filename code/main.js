mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

init();


function paint() {
	with (mgraphics) {
		move_to(-1.0, -1.0);	// the bottom-left
		line_to(1.0, 1.0);	// the top-right
		stroke();			// draw it

		move_to(1.0, -1.0);	// the bottom-right
		line_to(-1.0, 1.0);	// the top-left
		stroke();			// draw it
	}
}