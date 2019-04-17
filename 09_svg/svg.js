var box = document.getElementById("box");
var prevX = null;
var prevY = null;
var clear = document.getElementById("clear");

box.addEventListener('click', function(e){
    x = e.offsetX;
    y = e.offsetY;

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
	circle.setAttribute("r", "20");
	circle.setAttribute("stroke", "black");
	circle.setAttribute("fill", "red");
	box.appendChild(circle)
    
    if(prevX != null){
	
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", prevX);
	line.setAttribute("y1", prevY);
	line.setAttribute("x2", x);
	line.setAttribute("y2", y);
	line.setAttribute("stroke", "black");
	box.appendChild(line);
	}

	prevX = x;
	prevY = y;
})

clear.addEventListener('click', function(){
	while (box.firstChild) {
		box.removeChild(box.firstChild);
	}
	prevX = null;
    prevY = null;
})
