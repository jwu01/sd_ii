var c = document.getElementById("slate");
var ctx = c.getContext('2d');

var tog = document.getElementById("rekt")
var clear = document.getElementById("clear")

c.addEventListener('click', function(e) {
    console.log(e);
    x = e.offsetX;
    y = e.offsetY;

    if (tog.checked)
        ctx.fillRect(x,y,10,15);
    else
    {
        ctx.beginPath();
        ctx.ellipse(x, y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    }
})

clear.addEventListener('click', function (e) {
    ctx.clearRect(0, 0, c.width, c.height);	
})