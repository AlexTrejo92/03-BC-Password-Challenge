// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Creation of the function to generate the password. Inside we declare a couple of empty variables that will later be filled with functions
function generatePassword () {
  var password = '';

  var characterBank = '';

  var firstprompt = window.prompt ('How many characters would you like your password to contain?');
  if (!firstprompt) {
    return;
  }
  
  if (firstprompt < 8 || firstprompt > 128) {
    window.alert ("Please select at least 8 and no more than 128 characters for your password");
    return;
  } else {
    var secondprompt = window.confirm ('Click OK to confirm including special characters.');
    var thirdprompt = window.confirm ('Click OK to confirm including numeric characters.');
    var fourthprompt = window.confirm ('Click OK to confirm including lowercase characters.');
    var fifthprompt = window.confirm ('Click OK to confirm including uppercase characters.');
  }

  // These are console logs created originally to confirm the user selections were boolean, so they can be used further in the code to create statements. Commented Out as they do not provide functionality to the final code but left as a testimony of the process to make this challenge.
  // console.log(firstprompt);
  // console.log(secondprompt);
  // console.log(thirdprompt);
  // console.log(fourthprompt);
  // console.log(fifthprompt);

  // Creation of variables that will fill the characterBank variable according to the user selection inside the previous prompts.
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var numericCharacters = "0123456789";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // On these if statements, i left a console log so the user can confirm which type of characters were being added to the password according to their selection on the prompts.
if (secondprompt === true) {
  console.log ('Special Characters were considered to be included in the password');
  characterBank = characterBank.concat(specialCharacters);
}

if (thirdprompt === true) {
  console.log ('Numeric Characters were considered to be included in the password');  
  characterBank = characterBank.concat(numericCharacters);
} 

if (fourthprompt === true) {
  console.log ('lowercase Characters were considered to be included in the password');
  characterBank = characterBank.concat(lowercaseCharacters);
} 

if (fifthprompt === true) {
  console.log ('uppercase Characters were considered to be included in the password');
  characterBank = characterBank.concat(uppercaseCharacters);
}

// This is an alert message in case the user selects a false value in all the prompts. At least one type of character is necessary to create the password.
if (secondprompt === false && thirdprompt === false && fourthprompt === false && fifthprompt === false) {
  window.alert ('Please select at least one type of character for your password');
  return;
}

// For loop created so that the password is generated with a random selector of a character type from the characterBank variable each time the iteration applies. The number of times the loop is working is tied to the value of the first prompt the user selected.

for (var i = 0; i < firstprompt; i++) {
  var randomNumber = Math.floor(Math.random() * characterBank.length);
  password = password.concat(characterBank[randomNumber]);
}

// We're ending the function so that it returns the value of the password variable, so that the write password function can later be used to "print" the final password onto the page.
  return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
