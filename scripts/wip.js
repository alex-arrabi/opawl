// Global variables
var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

// Global functions
function $(element) {
  return document.getElementById(element);
}

function addHiddenClass(elementId) {
  var classname = $(elementId).className;
  classname = classname.replace("hidden", "");
  $(elementId).className = classname + " hidden";
}

function removeHiddenClass(elementId) {
  var classname = $(elementId).className;
  $(elementId).className = classname.replace("hidden", "");
}

// On page event functions

// Main functions

function validateEmail(email) {
  if (email && email.length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

function processEmail() {
  var email = $("email").value;

  if (validateEmail(email)) {
    // Hide existing messages
    addHiddenClass('notify-email');
    addHiddenClass('invalid-email');

    // Show after submit message
    removeHiddenClass('after-submit');
    return true;
  } else {
    removeHiddenClass('invalid-email');
    return false;
  }
}

function submitForm() {
  if (processEmail()) {
    $('notify-email').submit();
  }
}
