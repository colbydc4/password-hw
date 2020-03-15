// Assignment Code
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '1234567890'
var symbol = '!#$%&*+,-./:;<=>?@^~'

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerCaseChoice = confirm("Do you want to include lower case letters?")
  var upperCaseChoice = confirm("Do you want  to include upper case letters?")
  var numberChoice = confirm("Do you want to include numbers?")
  var symbolChoice = confirm("Do you want to include special characters?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
