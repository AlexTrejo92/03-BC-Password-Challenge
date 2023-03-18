// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var firstprompt = window.prompt ('How many characters would you like your password to contain?');
  if (!firstprompt) {
    return;
  }

  if (firstprompt < 8) {
    window.alert ("Please select at least 8 characters for your password");
  } else if (firstprompt >= 8) {
    var secondprompt = window.confirm ('Click OK to confirm including special characters.');
  }

  if (secondprompt) {
    var thirdprompt = window.confirm ('Click OK to confirm including numeric characters.')
  }

  if (thirdprompt) {
    var fourthprompt = window.confirm ('Click OK to confirm including lowercase characters.')
  }

  if (fourthprompt) {
    var fifthprompt = window.confirm ('Click OK to confirm including uppercase characters.')
  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
