img="";
status="";
object=[];
function setup(){
canvas=createCanvas(600,400)
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Object"
}

function modelloaded(){
console.log("modelloaded")
status=true;
objectdetector.detect(img,gotresults)
}

function gotresults(error, results){
if(error){
console.log(error);
}
else{
console.log(results);
object=results;
}
}

function draw(){
image(img,0,0,600,400);
if(status!=""){
for(i=0; i<object.length; i++){
document.getElementById("status").innerHTML="Object Detected";
fill("blue");
percent=floor(object[i].confidence*100);
text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+15);
noFill();
stroke("blue");
rect(object[i].x, object[i].y, object[i].width, object[i].height);
}
}
}

function preload(){
img=loadImage("dog_cat.jpg");
}