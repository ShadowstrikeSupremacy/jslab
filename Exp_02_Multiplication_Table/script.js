// Multiplication table using FOR loop

// Reads the number entered by the user (shared with script_while.js)
function readNumber() {
  return parseInt(document.getElementById("numberInput").value);
}

function tableUsingForLoop() {
  let num = readNumber();
  let output = document.getElementById("forResult");

  if (isNaN(num)) {
    output.innerHTML = "Please enter a valid number.";
    return;
  }

  let html = "<h3>For Loop</h3><table>";
  for (let i = 1; i <= 10; i++) {
    html += "<tr><td>" + num + " x " + i + " = " + (num * i) + "</td></tr>";
  }
  html += "</table>";
  output.innerHTML = html;
}
