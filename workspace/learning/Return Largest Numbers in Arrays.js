function largestOfFour(arr) {
	// You can do this!
 	var arrLargestOfFour = [0, 0, 0, 0];
 	
 	for (var i = 0; i <= arr.length - 1; i++) {
 		for (var j = 0; j <= arr[i].length - 1; j++ ) {

 			for (var k = 0; k <= arrLargestOfFour.length; k++) {	
 			
 				if (arr[i][j] > arrLargestOfFour[i]) {
 					arrLargestOfFour[i] = arr[i][j];
 					console.log(arrLargestOfFour);
 				}	
 			}
 		}
 	}
	
	return arrLargestOfFour;
}

//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("\n");
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));