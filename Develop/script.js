// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


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

  console.log(firstprompt);
  console.log(secondprompt);
  console.log(thirdprompt);
  console.log(fourthprompt);
  console.log(fifthprompt);

  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var numericCharacters = "0123456789";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (secondprompt === true) {
  console.log ('Special Characters will be included in the password');
  characterBank = characterBank.concat(specialCharacters);
}

if (thirdprompt === true) {
  console.log ('Numeric Characters will be included in the password');  
  characterBank = characterBank.concat(numericCharacters);
} 

if (fourthprompt === true) {
  console.log ('lowercase Characters will be included in the password');
  characterBank = characterBank.concat(lowercaseCharacters);
} 

if (fifthprompt === true) {
  console.log ('uppercase Characters will be included in the password');
  characterBank = characterBank.concat(uppercaseCharacters);
}

if (secondprompt === false && thirdprompt === false && fourthprompt === false && fifthprompt === false) {
  window.alert ('Please select at least one type of character for your password');
  return;
}

console.log(characterBank);
console.log(characterBank.length);

// var password = for (characterBank )

for (var i = 0; i < firstprompt; i++) {
  var randomNumber = Math.floor(Math.random() * characterBank.length);
  console.log(i + '#of times the loop is running');
  password = password.concat(characterBank[randomNumber]);
}

console.log(randomNumber);
console.log(password);
// var randomNumber = Math.floor(Math.random() * characterBank.length);
// console.log (randomizer);
// console.log (typeof randomizer);

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
