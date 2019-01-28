document.forms.registration.onsubmit =
  function(event) {
    return validateRegistrationForm(event);
  };
function validateFirstName (FirstNameField) {
  if (/\b[A-Za-z]+\s*[A-Za-z]*\b/.test(FirstNameField.value)) {
    return "";
  }
  else {
    return "The First Name field needs a valid name with letters.\n";
  }
}
function validateLastName (LastNameField) {
  if (/\b[A-Za-z]+\b/.test(LastNameField.value)) {
    return "";
  }
  else {
    return "The Last Name field needs a valid name with letters.\n";
  }
}
function validatePhone (PhoneField) {
  if (/\s*^\d{3}-\d{3}-\d{4}$\s*/.test(PhoneField.value)) {
    return "";
  }
  else {
    return "Please enter a valid phone number.\n";
  }
}
function validateEmail (EmailField) {
  if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(EmailField.value)) {
    return "";
  }
  else {
    return "Please enter a valid e-mail address.\n";
  }
}
// Age validation by year only:
//function validateAge() {
//	var year = new Date().getFullYear();
//	var birth_year = new Date(document.getElementById("bdate").value).getFullYear();
//	var age = year - birth_year;
//	if (age < 12 || age > 18) {
//		return "Sorry, you must be between 12 and 18 years old.\n";
//	}
//	else {
//		return "";
//	}
//}
function validateAge() {
	var year = new Date();
	var dob = new Date(document.getElementById("bdate").value);
	var diff = year - dob;
	var one_year = 1000*60*60*24*365;
	var age = diff/one_year;
	if (age < 12 || age > 18) {
		return "Sorry, you must be between 12 and 18 years old.\n";
	}
	else {
		return "";
	}
}
function validateRegistrationForm(event) {
  var form = event.target;
  var messages = validateFirstName(form.first_name) + validateLastName(form.last_name) + validatePhone(form.phone) + validateEmail(form.email) + validateAge();
	if (messages === "") {
		return true;
	}
  else {
		alert(messages);
		return false;
	}
}
function setUniform () {
	var allInputs = document.getElementsByName("jersey_size");
	var allInputs2 = document.getElementsByName("shorts_size");
 	if (document.getElementById("uniform").checked) {
		for(var i = 0; i < allInputs.length; i++) {
		allInputs[i].disabled = true;
		}
		for(var i = 0; i < allInputs2.length; i++) {
		allInputs2[i].disabled = true;
		}
	} 
	else {
		for(var i = 0; i < allInputs.length; i++) {
		allInputs[i].disabled = false;
		}
		for(var i = 0; i < allInputs2.length; i++) {
		allInputs2[i].disabled = false;
		}
	}
}
function getSeason() {
	var month = new Date().getMonth();
	var year = new Date().getFullYear();
	if (month === 0 || month === 1 || month === 11)	{
		document.getElementById("season").value = "Winter " + year;
	}
	else if (month === 2 || month === 3 || month === 4)	{
		document.getElementById("season").value = "Spring " + year;
	}
	else if (month === 5 || month === 6 || month === 7)	{
		document.getElementById("season").value = "Summer " + year;
	}
	else {
		document.getElementById("season").value = "Fall " + year;
	}
}
function today() {
	document.getElementById("todaysdate").value = new Date().toDateString();
}
function schools() {
	var first_school = document.getElementById("school1").selectedIndex;
	var secondSchoolInputs = document.getElementById("school2").options;
	for (var i=0; i < secondSchoolInputs.length; i++) {
		if (i === first_school) {
			secondSchoolInputs[i].disabled = true;
		}
		else {
			secondSchoolInputs[i].disabled = false;
		}
	}
}
function matchSize () {	
	var jsize = document.getElementsByName("jersey_size");
	var ssize = document.getElementsByName("shorts_size");
	for (var i=0; i < jsize.length; i++) {
		if (jsize[i].checked) {
			ssize[i].checked = true;
		}
		else {
			ssize[i].checked = false;
		}
	}
}