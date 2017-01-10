function rot13(str) { // LBH QVQ VG!
  	
	var newStr = "";
	var intCode = NaN;
	
	console.log(str);
	
	for (var i = 0; i < str.length; i++) {
		
		if (str.charCodeAt(i) == " ") {
			// do nothing
		} else {
			
			intCode = parseInt(str.charCodeAt(i));
			console.log(intCode);
			
			if (intCode < 65 || intCode > 90) {
				
				newStr = newStr + String.fromCharCode(intCode);
				
			} else {
			
				intCode += 13;
			
				if (intCode > 90) {
					intCode = (intCode - 90) + 64;
				}
		
				// now convert back to string and add to end of new string
				//console.log(intCode);
				newStr = newStr + String.fromCharCode(intCode);
			}
		}
	}
	return newStr;
}

//console.log(rot13("!"));
///console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));