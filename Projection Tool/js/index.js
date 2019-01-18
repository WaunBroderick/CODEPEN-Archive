drawInternalMovement("myCanvas", 123, 20, -20, 45, -35);


function drawInternalMovement(chartId, TotalHeadCount, Hires, Exits, InternalIn, InternalOut){
var canvas = document.getElementById(chartId);
var ctx = canvas.getContext("2d");


var width = canvas.width;
var height = canvas.height;
var area = canvas.width*canvas.height;  
  
var xCenter = width/2;
var yCenter = height/2;
var cSize = 100;
var cTop = yCenter - (cSize)
var cBottom = yCenter - (cSize)

var Movement = TotalHeadCount + Hires - Exits + InternalIn - InternalOut

  
ctx.beginPath();
ctx.arc(xCenter,yCenter,cSize,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = '#CCCCCC';
ctx.fill();


  
ctx.font='15px fontawesome';

var HorizontalCenterLine = (xCenter.toString(10) + "px");
var VerticalCenterLine = (yCenter.toString(10) + "px");
var CircleTopLine = (cTop.toString(10) + "px");


document.getElementById("param1").innerHTML = TotalHeadCount + "<i class='fa fa-users'></i>";
var totHeadCountHorizontal = ((xCenter-15).toString(10) + "px");
document.getElementById("param1").style.left = ((xCenter-30).toString(10) + "px");
document.getElementById("param1").style.top = ((cTop+15).toString(10) + "px");;

document.getElementById("param1Title").style.left = ((xCenter-65).toString(10) + "px");
document.getElementById("param1Title").style.top = ((cTop+35).toString(10) + "px");;


document.getElementById("param6").innerHTML = Movement;
document.getElementById("param6").style.left = totHeadCountHorizontal;
var movementPos = ((yCenter-20).toString(10) + "px");
document.getElementById("param6").style.top = movementPos;


  
document.getElementById("param2").innerHTML = Hires + "<i class='fas fa-plus-circle'></i>";
document.getElementById("param2").style.left = "200px";
document.getElementById("param2").style.top = "165px";

  
document.getElementById("param3").innerHTML = Exits + "<i class='fas fa-minus-circle'></i>";
document.getElementById("param3").style.left = "188px";
document.getElementById("param3").style.top = "270px";


document.getElementById("param4").innerHTML = InternalIn + "<i class='fas fa-plus-circle'></i>";
document.getElementById("param4").style.left = "585px";
document.getElementById("param4").style.top = "165px";

  
document.getElementById("param5").innerHTML = InternalOut + "<i class='fas fa-minus-circle'></i>";
document.getElementById("param5").style.left = "580px";
document.getElementById("param5").style.top = "270px";

document.getElementById("param7").style.left = ((xCenter-40).toString(10) + "px");;
document.getElementById("param7").style.top = "200px";


  
}

function updateInternalMovement(TotalHeadCount, Hires, Exits, InternalIn, InternalOut){

document.getElementById("param1").innerHTML = TotalHeadCount;

document.getElementById("param2").innerHTML = Hires;
  
document.getElementById("param3").innerHTML = Exits;
  
document.getElementById("param4").innerHTML = InternalIn;
  
document.getElementById("param5").innerHTML = InternalOut;

document.getElementById("param6").innerHTML = Movement;

}


$("#xMovements").on("change", function(e) {
    //drawInternalMovement("myCanvas", 1230, 20, -20, 45, -35);
    updateInternalMovement("myCanvas", 1230, 200, -200, 450, -350)

});

//