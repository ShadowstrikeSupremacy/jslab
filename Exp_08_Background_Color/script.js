let body = document.getElementById("pageBody");
let box = document.getElementById("colorBox");
let nameField = document.getElementById("nameField");
let emailField = document.getElementById("emailField");
let statusBox = document.getElementById("status");

function setPageColor(color) {
  body.style.backgroundColor = color;   // HTML DOM backgroundColor property
  statusBox.innerHTML = "Background color: " + color;
}

/* ---------- 1. Mouse over event ---------- */
box.onmouseover = function () {
  setPageColor("lightyellow");
  box.style.backgroundColor = "orange";
  box.innerHTML = "Mouse is over me";
};

box.onmouseout = function () {
  setPageColor("white");
  box.style.backgroundColor = "lightblue";
  box.innerHTML = "Mouse over me";
};

/* ---------- 2. Focus event ---------- */
nameField.onfocus = function () {
  setPageColor("lightgreen");
  nameField.style.backgroundColor = "#ffffcc";
};

nameField.onblur = function () {
  setPageColor("white");
  nameField.style.backgroundColor = "";
};

emailField.onfocus = function () {
  setPageColor("lightpink");
  emailField.style.backgroundColor = "#ffffcc";
};

emailField.onblur = function () {
  setPageColor("white");
  emailField.style.backgroundColor = "";
};
