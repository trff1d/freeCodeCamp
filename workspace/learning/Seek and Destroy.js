function destroyer(arr) {
	// Remove all the values
	//var arr = arr[0];
	
	var omit1st = arr[1];
	var omit2nd = arr[2];
	var omit3rd = arr[3];
	
	function omitIt(value) {
		console.log(value);
		return (value != omit1st && value != omit2nd && value != omit3rd);	
	}
	
	var newArr = arr.filter(omitIt);

	return newArr;


}

///console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
///console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
///console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));