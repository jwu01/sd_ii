var box = document.getElementById("box");
var clear = document.getElementById("clear");
var newC = true;
var move = document.getElementById("move");
var moving = false; 
var requestID;


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

move.addEventListener('click', function(){
    if(!moving)
        setup();
})
clear.addEventListener('click', function(){
	while (box.firstChild) {
		box.removeChild(box.firstChild);
    }
})



var setup = () => {

    var xCoordinate = Math.floor( Math.random() * (canvas.width-rectWidth) );
    var yCoordinate = Math.floor( Math.random() * (canvas.height-rectHeight) );
    
    var xVel = Math.random() * 10 - 5 ;
    var yVel = Math.random()* 10 - 5 ;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    var moveCircles = () => {

        clear();

        console.log("--------------------");
        console.log("drawing frame w/ requestID " + requestID);

        xCoordinate -= xVel;
        yCoordinate -= yVel;

        if (xCoordinate <= 0 || xCoordinate+rectWidth >= canvas.width)
            xVel *= -1;
        if (yCoordinate <= 0 || yCoordinate+rectHeight >= canvas.height)
            yVel *= -1;
        
        ctx.drawImage(logo, xCoordinate, yCoordinate, rectWidth, rectHeight); ;
        
        window.requestAnimationFrame(moveCircles)
        
    }// end of inner fxn

    moveCircles();}