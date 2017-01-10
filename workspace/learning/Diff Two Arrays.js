function diffArray(arr1, arr2) {
  var mergedArr = arr1.concat(arr2);
  var uniqueArr = [];
  // Same, same; but different.

 var newArr = [];
  var matchFound = false;
  var itemFound = "";
  var i, j;
  
  var arrLargest = [];
  var arrSmallest = [];
  
  // To loop through all values need to set the largest array as the main loop, to ensure all values covered.
  if (arr1.length > arr2.length) {
	  arrLargest = arr1;
	  arrSmallest = arr2;
  } else {
	  arrLargest = arr2;
	  arrSmallest = arr1;
  }

  for (i = 0; i < arrLargest.length; i++) { 

	  var result = arrSmallest.indexOf(arrLargest[i]);
	  
	  console.log("looking for: " + arrLargest[i] + " found at:  " + result);
	  
	  // if the element in largest array not found in the smallest array, add to new array.
	  if (result === -1) {
		  newArr.push(arrLargest[i]);		 
	  }
  }
  
  for (i = 0; i < arrSmallest.length; i++) { 

	  var result = arrLargest.indexOf(arrSmallest[i]);
	  
	  console.log("looking for: " + arrSmallest[i] + " found at:  " + result);
	  
	  // if the element in largest array not found in the smallest array, add to new array.
	  if (result === -1) {
		  newArr.push(arrSmallest[i]);		 
	  }
  }
  
  
 
  
  
  
  
  return newArr;

}


///console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
///console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); 
///console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
//console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
//console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));