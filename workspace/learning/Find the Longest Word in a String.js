function findLongestWord(str) {
	
	var arrSentence = Array(str.split(" "));
	var longestLengthSoFar = 0;

	console.log(arrSentence[0]);
	console.log(arrSentence[0].length);
	console.log("\n");
	
	for (var i = 0; i < arrSentence[0].length; i++) {
		
		console.log(arrSentence[0][i].length);
		
		if (arrSentence[0][i].length > longestLengthSoFar) {
			longestLengthSoFar = arrSentence[0][i].length;
			
		}	
		
	}
	
	//return str.length;
	console.log("\n");
	return longestLengthSoFar;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a barrel roll"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
