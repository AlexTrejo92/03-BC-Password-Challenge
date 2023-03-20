// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var password = '';

  var UserSelection = '';

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
    // if (firstprompt >= 8 && firstprompt <= 128) {

  console.log(secondprompt);
  console.log(thirdprompt);
  console.log(fourthprompt);
  console.log(fifthprompt);

  var specialCharacters = "!#$%& ()*+,-./:;<=>?@[]^_`{|}~";
  var numericCharacters = "0123456789";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (secondprompt === true) {
  console.log ('SecondPrompt is true');
  UserSelection = UserSelection.concat(specialCharacters);
} else {
  console.log ('SecondPrompt is false');
  UserSelection = UserSelection;
}

console.log('second',UserSelection);

if (thirdprompt === true) {
  UserSelection = UserSelection.concat(numericCharacters);
} else {
  UserSelection = UserSelection;
}

console.log ('third',UserSelection)

if (fourthprompt === true) {
  UserSelection = UserSelection.concat(lowercaseCharacters);
} else {

}

console.log ('fourth',UserSelection)

if (fifthprompt === true) {
  UserSelection = UserSelection.concat(uppercaseCharacters);
}

console.log ('fifth',UserSelection);

if (secondprompt === false && thirdprompt === false && fourthprompt === false && fifthprompt === false) {
  window.alert ('Please select at least one type of character for your password');
  return;
}


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
