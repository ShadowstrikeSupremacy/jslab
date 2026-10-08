let myArray = null;      // array created by the user
let lastObject = null;   // the last object that was appended

function show(text) {
  document.getElementById("result").innerHTML = text;
}

function arrayText() {
  return JSON.stringify(myArray);
}

function arrayReady() {
  if (myArray === null) {
    show("Please create the array first.");
    return false;
  }
  return true;
}

// Step 1 and 2: accept size and create the array using standard methods
function createArray() {
  let size = parseInt(document.getElementById("arraySize").value);
  if (isNaN(size) || size <= 0) {
    show("Please enter a valid array size.");
    return;
  }
  myArray = new Array();          // Array object
  for (let i = 1; i <= size; i++) {
    myArray.push(i * 10);         // fill with 10, 20, 30 ...
  }
  lastObject = null;
  show("Array of size " + size + " created: " + arrayText() + "<br>Length = " + myArray.length);
}

function readObject() {
  let name = document.getElementById("objName").value.trim();
  let age = parseInt(document.getElementById("objAge").value);
  if (name === "" || isNaN(age)) {
    show("Please enter name and age for the object.");
    return null;
  }
  return { name: name, age: age };
}

// Step 3: append an object to the end of the array using push()
function appendObject() {
  if (!arrayReady()) return;
  let obj = readObject();
  if (obj === null) return;
  myArray.push(obj);
  lastObject = obj;
  show("Object appended using push().<br>Array: " + arrayText() + "<br>Length = " + myArray.length);
}

// Add an object at the beginning using unshift()
function prependObject() {
  if (!arrayReady()) return;
  let obj = readObject();
  if (obj === null) return;
  myArray.unshift(obj);
  lastObject = obj;
  show("Object added at start using unshift().<br>Array: " + arrayText() + "<br>Length = " + myArray.length);
}

// Step 4: check whether the array and the appended object are arrays
function checkIsArray() {
  if (!arrayReady()) return;
  let text = "Array.isArray(myArray) = " + Array.isArray(myArray);
  if (lastObject !== null) {
    text += "<br>Array.isArray(appended object " + JSON.stringify(lastObject) + ") = " + Array.isArray(lastObject);
    text += "<br>typeof appended object = " + typeof lastObject;
  } else {
    text += "<br>No object appended yet.";
  }
  show(text);
}

// pop(): remove the last element
function removeLast() {
  if (!arrayReady()) return;
  let removed = myArray.pop();
  show("pop() removed: " + JSON.stringify(removed) + "<br>Array: " + arrayText() + "<br>Length = " + myArray.length);
}

// shift(): remove the first element
function removeFirst() {
  if (!arrayReady()) return;
  let removed = myArray.shift();
  show("shift() removed: " + JSON.stringify(removed) + "<br>Array: " + arrayText() + "<br>Length = " + myArray.length);
}
