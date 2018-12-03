function toggleRGB(){
    document.querySelector("#rgb").style.display ="flex";
    document.querySelector("#hsl").style.display = "none";
}

function toggleHSL(){
    document.querySelector("#rgb").style.display ="none";
    document.querySelector("#hsl").style.display = "flex";

}


var dialR=document.getElementById("red");
var redOut =document.getElementById("redOut");
dialR.addEventListener("change", function(){
  redOut.textContent=dialR.value;
  document.getElementById("Red").style.backgroundColor="rgb("+dialR.value+",0,0)";
  triggerOutput()
});

var dialG=document.getElementById("green");
var greenOut =document.getElementById("greenOut");
dialG.addEventListener("change", function(){
  greenOut.textContent=dialG.value;
  document.getElementById("Green").style.backgroundColor="rgb(0,"+dialG.value+",0)";
  triggerOutput()
});

var dialB=document.getElementById("blue");
var blueOut =document.getElementById("blueOut");
dialB.addEventListener("change", function(){
  blueOut.textContent=dialB.value;
  document.getElementById("Blue").style.backgroundColor="rgb(0,0,"+dialB.value+")";
  triggerOutput()
});


function triggerOutput(){
  document.getElementById('output').style.backgroundColor="rgb("+dialR.value+","+dialG.value+","+dialB.value+")";
}

var dialH=document.getElementById("hue");
var hueOut = document.getElementById("hueOut");
dialH.addEventListener("change", function(){
  hueOut.textContent=dialH.value;
  document.getElementById("Hue").style.backgroundColor="hsl("+dialH.value+",50%,50%)";
  triggerHSL()
});

var dialS=document.getElementById("sat");
var satOut = document.getElementById("satOut");
dialS.addEventListener("change", function(){
  satOut.textContent=dialS.value;
  document.getElementById("Sat").style.backgroundColor="hsl("+dialH.value+","+dialS.value+"%,50%)";
  triggerHSL()
});

var dialL=document.getElementById("lit");
var litOut = document.getElementById("litOut");
dialL.addEventListener("change", function(){
  litOut.textContent=dialL.value;
  document.getElementById("Lit").style.backgroundColor="hsl("+dialH.value+",50%,"+dialL.value+"%)";
  triggerHSL()
});

function triggerHSL(){
  document.getElementById('output').style.backgroundColor="hsl("+dialH.value+","+dialS.value+"%,"+dialL.value+"%)";
}