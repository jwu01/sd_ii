var dataset = [
    [14.2,  215],
    [16.4,	325],
    [11.9,  185],
    [15.2,	332],
    [18.5,	406],
    [22.1,	522],
    [19.4,	412],
    [25.1,	614],
    [23.4,	544],
    [18.1,	421],
    [22.6,	445],
    [17.2,	408]
];
var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) { return d[0]; })])
    .range([0,510]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
    .range([550,0]);

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  .ticks(5);

var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left")
	.ticks(5);

var svg = d3.select("body")
            .append("svg")
            .attr("width", 550)
            .attr("height", 600);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return xScale(d[0]);
    })
    .attr("cy", function(d) {
        return yScale(d[1]);
    })
    .attr("r", 5);

svg.append("g")
.attr("class", "axis")
.attr("transform", "translate(0, 500)")
.call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(500,0)")
    .call(yAxis);