// Multiplication table using WHILE and DO-WHILE loops
// readNumber() is defined in script.js

function tableUsingWhileLoop() {
  let num = readNumber();
  let output = document.getElementById("whileResult");

  if (isNaN(num)) {
    output.innerHTML = "Please enter a valid number.";
    return;
  }

  let html = "<h3>While Loop</h3><table>";
  let i = 1;
  while (i <= 10) {
    html += "<tr><td>" + num + " x " + i + " = " + (num * i) + "</td></tr>";
    i++;
  }
  html += "</table>";
  output.innerHTML = html;
}

function tableUsingDoWhileLoop() {
  let num = readNumber();
  let output = document.getElementById("doWhileResult");

  if (isNaN(num)) {
    output.innerHTML = "Please enter a valid number.";
    return;
  }

  let html = "<h3>Do-While Loop</h3><table>";
  let i = 1;
  do {
    html += "<tr><td>" + num + " x " + i + " = " + (num * i) + "</td></tr>";
    i++;
  } while (i <= 10);
  html += "</table>";
  output.innerHTML = html;
}
