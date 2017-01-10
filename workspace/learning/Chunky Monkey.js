function chunkArrayInGroups(arr, size) {
	// Break it up.
	var newArr = new Array();
	
	var numberOfNewElements = Math.ceil(arr.length / size);
	console.log(numberOfNewElements);
	
	for (var i = 0; i < arr.length ; i++) {
		newArr.push(arr.slice(i, i+size));
		i+=size-1;
	}

 // return arr;
	return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
