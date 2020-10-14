var billAmount=document.getElementById("billAmount");
var tipPercent=document.getElementById("tipPercent");
var numPeople=document.getElementById("numPeople");
var textContainer=document.getElementById("text-container");

function calculate(){
	output=(billAmount.value*(tipPercent.value/100))/numPeople.value

	textContainer.innerHTML="You should tip: $"+output
	textContainer.classList.remove("hide-me");
}

document.getElementById


document.getElementById("submit-button").onclick = function() {
	if(billAmount.value<=0){
		alert("You cannot have a bill amount of zero or less");
	}else if(tipPercent.value<0){
		alert("You cannot have a negative tip percentage rate")
	}else{
		calculate();
	}
};
