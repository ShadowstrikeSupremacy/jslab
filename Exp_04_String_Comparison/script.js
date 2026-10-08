function getStrings() {
  return [document.getElementById("string1").value, document.getElementById("string2").value];
}

// 1. Strict equality operator ===
function strictEqualityText(s1, s2) {
  if (s1 === s2) {
    return "Strict Equality (===): '" + s1 + "' and '" + s2 + "' are EQUAL";
  }
  return "Strict Equality (===): '" + s1 + "' and '" + s2 + "' are NOT equal";
}

// 2. length property with comparison operators
function lengthText(s1, s2) {
  let msg = "Length: string1 = " + s1.length + ", string2 = " + s2.length + " -> ";
  if (s1.length > s2.length) {
    msg += "string1 is longer";
  } else if (s1.length < s2.length) {
    msg += "string2 is longer";
  } else {
    msg += "both have the same length";
  }
  return msg;
}

// 3. localeCompare() - alphabetical order
function localeText(s1, s2) {
  let r = s1.localeCompare(s2);
  let msg = "localeCompare() returned " + r + " -> ";
  if (r < 0) {
    msg += "'" + s1 + "' comes BEFORE '" + s2 + "' alphabetically";
  } else if (r > 0) {
    msg += "'" + s1 + "' comes AFTER '" + s2 + "' alphabetically";
  } else {
    msg += "both strings are the same alphabetically";
  }
  return msg;
}

function showResult(text) {
  document.getElementById("result").innerHTML = text;
}

function validInput(s1, s2) {
  if (s1 === "" || s2 === "") {
    showResult("Please enter both strings.");
    return false;
  }
  return true;
}

function compareStrictEquality() {
  let [s1, s2] = getStrings();
  if (validInput(s1, s2)) showResult(strictEqualityText(s1, s2));
}

function compareLength() {
  let [s1, s2] = getStrings();
  if (validInput(s1, s2)) showResult(lengthText(s1, s2));
}

function compareLocale() {
  let [s1, s2] = getStrings();
  if (validInput(s1, s2)) showResult(localeText(s1, s2));
}

function compareAll() {
  let [s1, s2] = getStrings();
  if (validInput(s1, s2)) {
    showResult(strictEqualityText(s1, s2) + "<br>" + lengthText(s1, s2) + "<br>" + localeText(s1, s2));
  }
}
