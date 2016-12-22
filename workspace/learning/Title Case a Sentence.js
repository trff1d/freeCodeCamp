function titleCase(str) {
	
// console.log();
	
	str = str.toLowerCase(str);
	
	var arr = str.split(" ");
	var i = 0;
	
	while (i < arr.length) {
		console.log(arr[i].charAt(0));
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		i++;
	}
	
	str = arr.join(' ');

	return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));