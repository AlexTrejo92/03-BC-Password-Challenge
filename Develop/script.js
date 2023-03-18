// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialCharacters = "!#$%& ()*+,-./:;<=>?@[]^_`{|}~";
var numericCharacters = "0123456789";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log (specialCharacters);
console.log (numericCharacters);
console.log (lowercaseCharacters);
console.log (uppercaseCharacters);


// Write password to the #password input
function writePassword() {
  var firstprompt = window.prompt ('How many characters would you like your password to contain?');
  if (!firstprompt) {
    return;
  }
  
  if (firstprompt < 8 || firstprompt > 128) {
    window.alert ("Please select at least 8 and no more than 128 characters for your password");
    return;
  } 
  
  if (firstprompt >= 8 && firstprompt <= 128) {
    var secondprompt = window.confirm ('Click OK to confirm including special characters.');
    var thirdprompt = window.confirm ('Click OK to confirm including numeric characters.');
    var fourthprompt = window.confirm ('Click OK to confirm including lowercase characters.');
    var fifthprompt = window.confirm ('Click OK to confirm including uppercase characters.')
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
