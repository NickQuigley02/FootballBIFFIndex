function BIFFCalculator(yardsToGo, fieldPosition, timeRemaining, scoreDiff){
	console.log('It works!');
	//var yardsToGo = 10;
	var BIFFIndex = Math.log(yardsToGo+1);

	console.log(BIFFIndex);

	//var fieldPosition = 30;
	BIFFIndex *= (11 + (Math.cos(fieldPosition/50 + Math.PI/2)));

	console.log(BIFFIndex);

	//var timeRemaining = 3200;
	BIFFIndex *= ((4200 - timeRemaining)/20);

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
	return BIFFindex;
}