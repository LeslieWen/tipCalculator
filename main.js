var billAmount=document.getElementById("billAmount");
var tipPercent=document.getElementById("tipPercent");
var numPeople=document.getElementById("numPeople");
var textContainer=document.getElementById("text-container");

var output;


//Need to do error handling

function calculate(){
	output=(billAmount.value*(tipPercent.value/100))/numPeople.value

	textContainer.innerHTML="Tip: $"+output
	textContainer.classList.remove("hide-me");
}

document.getElementById("submit-button").onclick = function() {
	if(billAmount.value<=0){
		alert("You cannot have a bill amount of zero");
	}else if(tipPercent.value<0){
		alert("You cannot have a negative tip percentage rate")
	}else{
		calculate();
	}

  	
};
