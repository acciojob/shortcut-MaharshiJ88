function shortcut(str1, str2) {
  // your code here
	if (str1.length > 0 && str2.length > 0) {
    // Use the first character of each string
    return str1[0].toUpperCase() + str2[0].toLowerCase();
  } else {
    // If either of the strings is empty, return an empty string
    return '';
  }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
