function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
	
	var lengthOfString = str.length; 
	var lengthOfTarget = target.length;
	var textFound = "";
	
	console.log("lengthOfString: " + lengthOfString);
	console.log("lengthOfTarget: " + lengthOfTarget);
	
	textFound = str.substring(lengthOfString - lengthOfTarget);
	console.log(textFound);
	
	if (textFound === target) {
		return true;
	} else {
		return false;
	}
	
	
	// return str.endsWith(target); 
	// return str;
}

console.log(confirmEnding("Bastian", "n"));
console.log("\n");
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log("\n");
console.log(confirmEnding("He has to give me a new name", "name"));

