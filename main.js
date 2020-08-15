var billAmount=document.getElementById("billAmount");
var tipPercent=document.getElementById("tipPercent");
var numPeople=document.getElementById("numPeople");
var textContainer=document.getElementById("text-container");

var output;


function calculate(){
	console.log(billAmount.value);
	textContainer.innerHTML=billAmount.value;
	textContainer.classList.remove("hide-me");
}

document.getElementById("submit-button").onclick = function() {
  calculate();
};
