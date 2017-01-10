function truncateString(str, num) {
	// Clear out that junk in your trunk
	
	var textTuncated = "";
	
	if (str.length > num) {
		
		if (str.length > 3) {
			textTuncated = str.slice(0, num - 3);
			textTuncated = textTuncated + "...";
			str = textTuncated;
		} 
		
		if (num <= 3) {
			textTuncated = str.slice(0, num);
			textTuncated = textTuncated + "...";
			str = textTuncated;
		}
	}
		
	return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));