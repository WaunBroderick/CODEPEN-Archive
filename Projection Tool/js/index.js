drawInfoGraphic("myCanvas", 123, 1, 10,20,30,40,50,1);


function drawInfoGraphic(chartId, totHeadCountCurrent, growthRate, AOFHeadCountHistorical, promotionFlag, totExitsHistorical,AOFExitsHistorical, totExportsHistorical,AOFExportsHistorical){
var canvas = document.getElementById(chartId);
var ctx = canvas.getContext("2d");

var totHeadCountFuture = Math.round(totHeadCountCurrent * ( 1 + growthRate));
  
var RequiredHires = (totHeadCountFuture - totHeadCountCurrent + totExitsHistorical + totExportsHistorical);
    

var width = canvas.width;
var height = canvas.height;
var area = canvas.width*canvas.height;  
  
var xCenter = width/2;
var yCenter = height/2;
var cSize = (width/4)-(height/4);

ctx.beginPath();
ctx.arc(xCenter,yCenter,cSize,0,2*Math.PI);
ctx.stroke();

ctx.font='14px FontAwesome';
ctx.fillText(totHeadCountCurrent, xCenter-15, yCenter-60);
ctx.fillText("Total Employees", xCenter-45, yCenter-40);
  
ctx.fillText("\uf508",20,50);
ctx.fillText("Total Head Count Future: " + totHeadCountFuture,20,70);
ctx.fillText("Required Hires: " + RequiredHires,20,90);
  
  
document.getElementById("param1").innerHTML = RequiredHires;
}