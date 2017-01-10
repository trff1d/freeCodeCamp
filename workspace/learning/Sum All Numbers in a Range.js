function sumAll(arr) {
	
	// sort the array
	function sortNumber(a,b)
	{
	  return a - b;
	}
	
	arr = arr.sort(sortNumber);

	var sum = 0;
	for (var i = arr[0]; i <= arr[1]; i++) {
		sum = sum + i;
	}
	
	
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5])); 