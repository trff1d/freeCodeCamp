function multiplyAll() {
  var product = 1;
  var arr = [[1],[2],[3]];
  //var arr = [[1],[2],[3],[4]];
  //var arr = [[1,2],[3,4],[5,6,7]];
  
  console.log(arr);
  console.log(arr.length);
  
  console.log(arr[0]);
  console.log(arr[2]);
  
  
  
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
	  for (var j=0; j < arr[i].length; j++) {
		  product *= arr[i][j];
//		  console.log("i_index = " + i + " j_index = "  +  " product = " + product);
//		  console.log("i_data  = " + arr[i] + " j_data = " + arr[j]);
	  }
  }
  
  // Only change code above this line
  return product;
}

//multiplyAll([[1],[2],[3]]);
console.log(multiplyAll());


