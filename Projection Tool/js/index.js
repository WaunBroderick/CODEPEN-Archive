//Test set
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
ctx.lineWidth= 5;
ctx.arc(xCenter,yCenter,cSize,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = '#eeeeee';
ctx.fill();


  
ctx.font='15px fontawesome';

var HorizontalCenterLine = (xCenter.toString(10) + "px");
var VerticalCenterLine = (yCenter.toString(10) + "px");
var CircleTopLine = (cTop.toString(10) + "px");


document.getElementById("headCountNum").innerHTML = TotalHeadCount + "&nbsp;<span id='userIcon'><i class='fa fa-users'></i><span>";
var totHeadCountHorizontal = ((xCenter-15).toString(10) + "px");
document.getElementById("headCountNum").style.left = ((xCenter-30).toString(10) + "px");
document.getElementById("headCountNum").style.top = ((cTop+15).toString(10) + "px");;

document.getElementById("headCountTitle").style.left = ((xCenter-65).toString(10) + "px");
document.getElementById("headCountTitle").style.top = ((cTop+35).toString(10) + "px");;


document.getElementById("movementNum").innerHTML = Movement;
document.getElementById("movementNum").style.left = totHeadCountHorizontal;
var movementPos = ((yCenter-30).toString(10) + "px");
document.getElementById("movementNum").style.top = movementPos;


  
document.getElementById("hiresNum").innerHTML = Hires + "&nbsp;<i class='fas fa-plus-circle'></i>";
document.getElementById("hiresNum").style.left = "200px";
document.getElementById("hiresNum").style.top = "165px";

  
document.getElementById("exitsNum").innerHTML = Exits + "&nbsp;<i class='fas fa-minus-circle'></i>";
document.getElementById("exitsNum").style.left = "188px";
document.getElementById("exitsNum").style.top = "270px";


document.getElementById("internalInNum").innerHTML = InternalIn + "&nbsp;<i class='fas fa-plus-circle'></i>";
document.getElementById("internalInNum").style.left = "585px";
document.getElementById("internalInNum").style.top = "165px";

  
document.getElementById("internalOutNum").innerHTML = InternalOut + "&nbsp;<i class='fas fa-minus-circle'></i>";
document.getElementById("internalOutNum").style.left = "580px";
document.getElementById("internalOutNum").style.top = "270px";

document.getElementById("centerpieceIcon").style.left = ((xCenter-20).toString(10) + "px");;
document.getElementById("centerpieceIcon").style.top = "210px";


  
}

function updateInternalMovement(TotalHeadCount, Hires, Exits, InternalIn, InternalOut){
//FIX ALL HTML NAMES TO MAKE FUNCTIONAL
document.getElementById("param1").innerHTML = TotalHeadCount;

document.getElementById("param2").innerHTML = Hires;
  
document.getElementById("param3").innerHTML = Exits;
  
document.getElementById("param4").innerHTML = InternalIn;
  
document.getElementById("param5").innerHTML = InternalOut;

document.getElementById("param6").innerHTML = Movement;

}
