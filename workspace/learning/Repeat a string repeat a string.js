function repeatStringNumTimes(str, num) {
	// repeat after me
	var newStr = "";
	
	if (num > 0) {
		for (var i = 0; i < num; i++) {
			newStr += str;
		}
	} else {
		newStr = "";
	}
	
	return newStr;
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));