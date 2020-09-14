var billAmount=document.getElementById("billAmount");
var tipPercent=document.getElementById("tipPercent");
var numPeople=document.getElementById("numPeople");
var textContainer=document.getElementById("text-container");

var output;


//Need to do error handling

//And If percentage gets into negatives

function calculate(){
	output=(billAmount.value*(tipPercent.value/100))/numPeople.value

	textContainer.innerHTML="Tip: $"+output
	textContainer.classList.remove("hide-me");
}

document.getElementById("submit-button").onclick = function() {
  calculate();
};
