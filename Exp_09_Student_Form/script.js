// Show an error message under a field and highlight it (wrong value stays in the box)
function setError(fieldId, message) {
  document.getElementById(fieldId + "Error").innerHTML = message;
  let field = document.getElementById(fieldId);
  if (field) {
    if (message === "") field.classList.remove("invalid");
    else field.classList.add("invalid");
  }
}

function clearErrors() {
  let ids = ["name", "address", "city", "state", "gender", "mobile", "email"];
  for (let i = 0; i < ids.length; i++) setError(ids[i], "");
}

// a) Correct names: only letters and spaces, at least 2 characters
function validateName(id, label) {
  let value = document.getElementById(id).value.trim();
  if (value === "") {
    setError(id, label + " is required.");           // d) no entered value
    return false;
  }
  if (!/^[A-Za-z ]{2,}$/.test(value)) {
    setError(id, "Invalid " + label + ": '" + value + "'. Use letters and spaces only.");   // e) re-display
    return false;
  }
  setError(id, "");
  return true;
}

function validateAddress() {
  let value = document.getElementById("address").value.trim();
  if (value === "") {
    setError("address", "Address is required.");
    return false;
  }
  if (value.length < 5) {
    setError("address", "Address is too short: '" + value + "'.");
    return false;
  }
  setError("address", "");
  return true;
}

function validateState() {
  if (document.getElementById("state").value === "") {
    setError("state", "Please select a state.");
    return false;
  }
  setError("state", "");
  return true;
}

function validateGender() {
  if (document.querySelector('input[name="gender"]:checked') === null) {
    setError("gender", "Please select gender.");
    return false;
  }
  setError("gender", "");
  return true;
}

// b) Mobile number: exactly 10 digits, starting with 6, 7, 8 or 9
function validateMobile() {
  let value = document.getElementById("mobile").value.trim();
  if (value === "") {
    setError("mobile", "Mobile number is required.");
    return false;
  }
  if (!/^[6-9][0-9]{9}$/.test(value)) {
    setError("mobile", "Invalid mobile number: '" + value + "'. Enter 10 digits starting with 6-9.");
    return false;
  }
  setError("mobile", "");
  return true;
}

// c) Email id: something@domain.extension
function validateEmail() {
  let value = document.getElementById("email").value.trim();
  if (value === "") {
    setError("email", "Email ID is required.");
    return false;
  }
  if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
    setError("email", "Invalid email ID: '" + value + "'. Example: name@gmail.com");
    return false;
  }
  setError("email", "");
  return true;
}

// Called on submit
function validateForm() {
  // run every check so all errors are shown together
  let ok = true;
  if (!validateName("name", "Name")) ok = false;
  if (!validateAddress()) ok = false;
  if (!validateName("city", "City")) ok = false;
  if (!validateState()) ok = false;
  if (!validateGender()) ok = false;
  if (!validateMobile()) ok = false;
  if (!validateEmail()) ok = false;

  if (ok) {
    showWelcomePage();
  }
  return false;   // stay on the same page
}

// f) Congratulation and welcome page
function showWelcomePage() {
  let name = document.getElementById("name").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked').value;

  document.getElementById("formPage").style.display = "none";
  document.getElementById("welcomePage").style.display = "block";
  document.getElementById("welcomeText").innerHTML = "Welcome, " + name + "! Your details were submitted successfully.";
  document.getElementById("summary").innerHTML =
    "Address: " + document.getElementById("address").value.trim() + "<br>" +
    "City: " + document.getElementById("city").value.trim() + "<br>" +
    "State: " + document.getElementById("state").value + "<br>" +
    "Gender: " + gender + "<br>" +
    "Mobile: " + document.getElementById("mobile").value.trim() + "<br>" +
    "Email: " + document.getElementById("email").value.trim();
}
