
function drawPie(csv,whichOne){
var width = 360,
    height = 200,
    radius = Math.min(width, height) / 2
    status = 1;
    
//var color = d3.scale.ordinal()
  //  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
var color = d3.scale.category20();



var arc = d3.svg.arc()
    .outerRadius(radius - 20)
    .innerRadius(radius - 120);
var largeArc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 130);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.number; });

var svg = d3.select("#pre"+whichOne).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var myMouseoverFunction = function() {
  /*if(status == 1){
  status = 0;*/
  var pie = d3.select(this);
      pie.transition().duration(200)
         .attr("d",largeArc);
  /*       
      pie.
    transition()
    .ease("bounce")
    .duration(2000)
    .attrTween("d", tweenPie);
  }*/
  var all = d3.selectAll(".arc");
      all.transition().duration(200)
         .style("opacity",1);
  var text = d3.selectAll("text");
      text.transition().duration(200)
          .style("font-size","15px");


}

var myMouseoutFunction = function() {
  
  var all = d3.selectAll(".arc");
      all.transition().duration(200)
         .style("opacity",.4);
  var text = d3.selectAll("text");
      text.transition().duration(200)
          .style("font-size","0px");
  var pie = d3.select(this);
      pie.transition().duration(200)
         .attr("d",arc);        
}
/*
function tweenPie(b) {
  b.innerRadius = radius - 130;
  b.outerRadius = radius - 10;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);

  return function(t) { return arc(i(t)); };
}
*/
d3.csv(csv, function(error, data) {

  data.forEach(function(d) {
    d.number = +d.number;
  });
 
  
  var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc")
      .style("opacity",.4);
      

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.option); })
      .on("mouseover",myMouseoverFunction )
      .on("mouseout",myMouseoutFunction );
      

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("font-size","0px")
      .text(function(d) { return d.data.option + " " + d.data.number;});
      
});
}