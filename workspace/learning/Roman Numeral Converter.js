function convertToRoman(num) {
 
	//var romanNumeralDefinitions = [[1, "I"], [5, "V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]];
	var romanNumeralDefinitions = [[1000, "M"], [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]];
	var romanNumeralResult = [];
	var modResult;
	var divResult;
		
	for (var i = 0; i < romanNumeralDefinitions.length; i++) {
		
		console.log("iteration: " + i);
		
		modResult = num % romanNumeralDefinitions[i][0];

		if (modResult === 0) {
			romanNumeralResult.push(romanNumeralDefinitions[i][1]);
			break;
		} else {
			divResult = (num - modResult) / romanNumeralDefinitions[i][0];
			
			console.log("div " + romanNumeralDefinitions[i][0] + " " + divResult);
			
			for (var j = 0; j < divResult; j++) {
				romanNumeralResult.push(romanNumeralDefinitions[i][1]);
				
			}
			
		//	num = num - (modResult * romanNumeralDefinitions[i][0]);
			
			
		}

		console.log(num);
	}
	
		return romanNumeralResult;
}

console.log(convertToRoman(2));
//console.log(convertToRoman(3));
//console.log(convertToRoman(4));
//console.log(convertToRoman(5));
//console.log(convertToRoman(9));
//console.log(convertToRoman(12));
//console.log(convertToRoman(16));
//console.log(convertToRoman(29));
//console.log(convertToRoman(44));
//console.log(convertToRoman(45));
//console.log(convertToRoman(68));
//console.log(convertToRoman(83));
//console.log(convertToRoman(97));
//console.log(convertToRoman(99));
//console.log(convertToRoman(500));
//console.log(convertToRoman(501));
//console.log(convertToRoman(649));
//console.log(convertToRoman(798));
//console.log(convertToRoman(891));
//console.log(convertToRoman(1000));
//console.log(convertToRoman(1004));
//console.log(convertToRoman(1006));
//console.log(convertToRoman(1023));
//console.log(convertToRoman(2014));
//console.log(convertToRoman(3999));
