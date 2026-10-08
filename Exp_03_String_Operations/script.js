function getText(id) {
  return document.getElementById(id).value;
}

function show(id, text) {
  document.getElementById(id).innerHTML = text;
}

/* ---------- 1. Reverse String ---------- */

// Using standard methods: split() -> reverse() -> join()
function reverseWithMethods() {
  let str = getText("reverseInput");
  if (str === "") { show("reverseResult", "Please enter a string."); return; }
  let reversed = str.split("").reverse().join("");
  show("reverseResult", "Length: " + str.length + "<br>Reversed (using methods): " + reversed);
}

// Without standard methods: read characters from the end using a loop
function reverseWithoutMethods() {
  let str = getText("reverseInput");
  if (str === "") { show("reverseResult", "Please enter a string."); return; }
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  show("reverseResult", "Length: " + str.length + "<br>Reversed (without methods): " + reversed);
}

/* ---------- 2. Replace Characters ---------- */

// Using standard method: replaceAll()
function replaceWithMethods() {
  let str = getText("replaceInput");
  let oldChar = getText("findChar");
  let newChar = getText("newChar");
  if (str === "" || oldChar === "") { show("replaceResult", "Please enter the string and the character(s) to replace."); return; }
  let result = str.replaceAll(oldChar, newChar);
  show("replaceResult", "Replaced (using methods): " + result);
}

// Without standard methods: compare character by character
function replaceWithoutMethods() {
  let str = getText("replaceInput");
  let oldChar = getText("findChar");
  let newChar = getText("newChar");
  if (str === "" || oldChar === "") { show("replaceResult", "Please enter the string and the character(s) to replace."); return; }

  let result = "";
  let i = 0;
  while (i < str.length) {
    // check if oldChar matches starting at position i
    let match = true;
    for (let j = 0; j < oldChar.length; j++) {
      if (str[i + j] !== oldChar[j]) { match = false; break; }
    }
    if (match) {
      result += newChar;
      i += oldChar.length;
    } else {
      result += str[i];
      i++;
    }
  }
  show("replaceResult", "Replaced (without methods): " + result);
}

/* ---------- 3. Palindrome ---------- */

// Using standard methods: compare with reversed string
function palindromeWithMethods() {
  let str = getText("palindromeInput");
  if (str === "") { show("palindromeResult", "Please enter a string."); return; }
  let clean = str.toLowerCase();
  let reversed = clean.split("").reverse().join("");
  if (clean === reversed) {
    show("palindromeResult", "'" + str + "' is a Palindrome (using methods)");
  } else {
    show("palindromeResult", "'" + str + "' is NOT a Palindrome (using methods)");
  }
}

// Without standard methods: compare first and last characters moving inward
function palindromeWithoutMethods() {
  let str = getText("palindromeInput");
  if (str === "") { show("palindromeResult", "Please enter a string."); return; }
  let isPalindrome = true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      isPalindrome = false;
      break;
    }
    left++;
    right--;
  }
  if (isPalindrome) {
    show("palindromeResult", "'" + str + "' is a Palindrome (without methods)");
  } else {
    show("palindromeResult", "'" + str + "' is NOT a Palindrome (without methods)");
  }
}
