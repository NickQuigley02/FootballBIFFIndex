
const BIFFResults = document.getElementById('.BIFFResults');
const x = document.getElementById("clickIt");


x.addEventListener("click", RespondClick);

function BIFFCalculator(){
	var yardsToGo = parseInt(document.getElementById('yardsField').value);
	var fieldPosition = parseInt(document.getElementById('fieldPositionField').value);
	var timeRemaining = parseInt(document.getElementById('timeRemainingField').value);
	var scoreDiff = parseInt(document.getElementById('scoreDiffField').value);
	console.log('It works!');
	//var yardsToGo = 10;
	
	console.log(yardsToGo);
	console.log(Math.log(yardsToGo+1));
	console.log(yardsToGo+1);
	
	console.log(fieldPosition);
	
	console.log(fieldPosition+1);
	
	console.log(timeRemaining);
	
	console.log(timeRemaining+1);
	
	console.log(scoreDiff);
	
	console.log(scoreDiff+1);
	
	var BIFFIndex = 3 * Math.log(yardsToGo+1);

	console.log(BIFFIndex);

	//var fieldPosition = 30;
	BIFFIndex *= (11 + (Math.cos((fieldPosition/50) + (Math.PI/2))));

	console.log(BIFFIndex);

	//var timeRemaining = 3200;
	BIFFIndex *= ((4200 - timeRemaining)/20);
	console.log((4200 - timeRemaining)/20);
	console.log(BIFFIndex);

	//var scoreDiff = -3;

	if(scoreDiff < -7){
		BIFFIndex *= 1;
	} else if (scoreDiff < -3){
		BIFFIndex *= 1.5;
	} else if (scoreDiff < 0){
		BIFFIndex *= 2;
	} else if (scoreDiff == 0){
		BIFFIndex *= 2.5;
	} else if (scoreDiff <= 3){
		BIFFIndex *= 1.5;
	} else if (BIFFIndex <= 7){
		BIFFIndex *= 0.75;
	} else {
		BIFFIndex *= 0.2;
	}
	console.log(BIFFIndex);
	return String(BIFFIndex);
}

function RespondClick() {
	document.getElementById("BIFFResults").innerHTML = BIFFCalculator();
}
