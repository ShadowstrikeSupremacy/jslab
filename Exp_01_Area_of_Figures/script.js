// Read a number from an input box
function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}

// Area of triangle using semi-perimeter (Heron's) formula
function areaOfTriangle() {
  let a = getValue("sideA");
  let b = getValue("sideB");
  let c = getValue("sideC");
  let output = document.getElementById("triangleResult");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    output.innerHTML = "Please enter valid positive sides.";
    return;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    output.innerHTML = "These sides cannot form a triangle.";
    return;
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  output.innerHTML = "Semi-perimeter s = " + s + "<br>Area of Triangle = " + area.toFixed(2);
}

// Area of rectangle = length x breadth
function areaOfRectangle() {
  let l = getValue("length");
  let b = getValue("breadth");
  let output = document.getElementById("rectangleResult");

  if (isNaN(l) || isNaN(b) || l <= 0 || b <= 0) {
    output.innerHTML = "Please enter valid positive values.";
    return;
  }
  let area = l * b;
  output.innerHTML = "Area of Rectangle = " + area.toFixed(2);
}

// Area of circle = PI x r x r
function areaOfCircle() {
  let r = getValue("radius");
  let output = document.getElementById("circleResult");

  if (isNaN(r) || r <= 0) {
    output.innerHTML = "Please enter a valid positive radius.";
    return;
  }
  let area = Math.PI * r * r;
  output.innerHTML = "Area of Circle = " + area.toFixed(2);
}
