// Tina Wong, Jeffrey Wu (Team friends)
// SoftDev2 pd7
// K01 - ...and I want to Paint It Better
// 2019-01-31

var c = document.getElementById("playground");
var width = c.getAttribute("width");
var height = c.getAttribute("height");
var ctx = c.getContext("2d");
var startX;
var startY;

// clears the canvas
var clearButton = document.getElementById('clear');

clearButton.addEventListener("click", function(e) {
    ctx.clearRect(0, 0, width, height);
    startX = false;
    startY= false;
});


c.addEventListener('click', function(e) {
    console.log(e)
  // prevent the default action of clicking on canvas
  e.preventDefault();
  console.log("Ellipse");
  ctx.fillStyle = "white"
  // starts the path of the ellipse all over again every time it is clicked
  ctx.beginPath();
    // get coordinates relative to element
    if(startX)
	ctx.moveTo(startX,startY)
    ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
    ctx.beginPath()
    ctx.ellipse(e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
    startX = e.offsetX
    startY = e.offsetY
});
