var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("random")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function randomize() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}


css.textContent = "linear-gradient(to right, rgb(0, 255, 0), rgb(255,0,0));"

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btnRandom.addEventListener("click", randomize);