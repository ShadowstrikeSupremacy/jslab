let arr = [];   // the array created by the user

function show(id, text) {
  document.getElementById(id).innerHTML = text;
}

function arrayToText(a) {
  return "[" + a.join(", ") + "]";
}

// Each operation works on a copy, so every button can be tried on the same original array
function copyArray() {
  let copy = [];
  for (let i = 0; i < arr.length; i++) copy[i] = arr[i];
  return copy;
}

function arrayCreated(resultId) {
  if (arr.length === 0) {
    show(resultId, "Please create the array first.");
    return false;
  }
  return true;
}

/* ---------- Create array ---------- */
function createArray() {
  let length = parseInt(document.getElementById("arrLength").value);
  let text = document.getElementById("arrElements").value;

  if (isNaN(length) || length <= 0) {
    show("arrayResult", "Please enter a valid array length.");
    return;
  }
  let elements = text.split(",").map(e => e.trim()).filter(e => e !== "");
  if (elements.length !== length) {
    show("arrayResult", "Please enter exactly " + length + " elements (you entered " + elements.length + ").");
    return;
  }
  arr = elements;
  show("arrayResult", "Array created: " + arrayToText(arr));
}

/* ---------- 1. Remove a specific element ---------- */

// Using indexOf() and splice()
function removeWithMethods() {
  if (!arrayCreated("removeResult")) return;
  let value = document.getElementById("removeValue").value.trim();
  let copy = copyArray();
  let index = copy.indexOf(value);
  if (index === -1) {
    show("removeResult", "'" + value + "' not found in " + arrayToText(arr));
    return;
  }
  copy.splice(index, 1);
  show("removeResult", "Original: " + arrayToText(arr) + "<br>After removing '" + value + "' (using methods): " + arrayToText(copy));
}

// Without methods: build a new array skipping the first matching element
function removeWithoutMethods() {
  if (!arrayCreated("removeResult")) return;
  let value = document.getElementById("removeValue").value.trim();
  let result = [];
  let k = 0;
  let removed = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value && !removed) {
      removed = true;
      continue;
    }
    result[k] = arr[i];
    k++;
  }
  if (!removed) {
    show("removeResult", "'" + value + "' not found in " + arrayToText(arr));
    return;
  }
  show("removeResult", "Original: " + arrayToText(arr) + "<br>After removing '" + value + "' (without methods): " + arrayToText(result));
}

/* ---------- 2. Check if array contains a value ---------- */

// Using includes()
function containsWithMethods() {
  if (!arrayCreated("containsResult")) return;
  let value = document.getElementById("searchValue").value.trim();
  if (arr.includes(value)) {
    show("containsResult", "'" + value + "' IS present in the array (using includes())");
  } else {
    show("containsResult", "'" + value + "' is NOT present in the array (using includes())");
  }
}

// Without methods: linear search with a for loop
function containsWithoutMethods() {
  if (!arrayCreated("containsResult")) return;
  let value = document.getElementById("searchValue").value.trim();
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      found = true;
      break;
    }
  }
  if (found) {
    show("containsResult", "'" + value + "' IS present in the array (using for loop)");
  } else {
    show("containsResult", "'" + value + "' is NOT present in the array (using for loop)");
  }
}

/* ---------- 3. Empty the array (button click event) ---------- */

// Using splice() to remove all elements
function emptyWithMethods() {
  if (!arrayCreated("emptyResult")) return;
  let copy = copyArray();
  copy.splice(0, copy.length);
  show("emptyResult", "Before: " + arrayToText(arr) + "<br>After emptying (using splice()): " + arrayToText(copy) + ", length = " + copy.length);
}

// Without methods: set length to 0
function emptyWithoutMethods() {
  if (!arrayCreated("emptyResult")) return;
  let copy = copyArray();
  copy.length = 0;
  show("emptyResult", "Before: " + arrayToText(arr) + "<br>After emptying (setting length = 0): " + arrayToText(copy) + ", length = " + copy.length);
}
