function getIndexToIns(arr, num) {
	// Find my place in this sorted array.
	var positionAt;
	arr = arr.sort(function(a, b){return a - b});
	
	console.log(arr);
	
	var found = false;
	var i = 0;
	
	while (found !== true) {
		console.log(found);
		
		console.log(i + " " + num + " " + arr[i]);
				
		if (arr[i] >= num) { // } || arr[i] === num )  {		
			console.log("arr[i] >= num");
			positionAt = i;
			console.log(positionAt);
			found = true;
			//i++;
		} else if (arr[i] < num) {
			console.log("arr[i] < num");
			//positionAt = i;
			i++;
			
		} 
		else if (i == arr.length) {
			console.log("i == arr.length");
			positionAt = i;
			found = true;
		}
	}
	return positionAt;
}

//console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//console.log(getIndexToIns([40, 60], 50));
//console.log(getIndexToIns([3, 10, 5], 3));
//console.log(getIndexToIns([5, 3, 20, 3], 5));
//console.log(getIndexToIns([2, 20, 10], 19)); 
console.log(getIndexToIns([2, 5, 10], 15));
