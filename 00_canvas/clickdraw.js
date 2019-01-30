var c = document.getElementbyId("slate");

c.addEventListener('click', function(e) {
    var ctx = cavas.getContext('2d');
    x = e.clientX
    y = e.clientY
    cont.fillRectangle(x,y,10,10)
})
