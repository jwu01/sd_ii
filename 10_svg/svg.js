var box = document.getElementById("box");
var clear = document.getElementById("clear");
var newC = true;

box.addEventListener('click', function(e){
    e.preventDefault
    x = e.offsetX;
    y = e.offsetY;

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.addEventListener('click', (e) => {
            console.log(circle)
            if (circle.getAttribute('fill') == 'red') {
                circle.setAttribute('fill', 'blue');
            } 
            else {
                circle.setAttribute('fill','red');
                circle.setAttribute("cx", Math.floor(Math.random() * 501));
                circle.setAttribute("cy", Math.floor(Math.random() * 501));
            }
            newC = false;
    });

    if(newC){  
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "20");
        circle.setAttribute("stroke", "black");
        circle.setAttribute("fill", "red");
        box.appendChild(circle)
    }

    newC = true;
})

clear.addEventListener('click', function(){
	while (box.firstChild) {
		box.removeChild(box.firstChild);
    }
})
