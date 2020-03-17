// Assignment Code
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var symbol = '!#$%&*+,-./:;<=>?@^~';
var passwordStr = '';
var lowerCaseChoice = '';
var upperCaseChoice = '';
var numberChoice = '';
var symbolChoice = '';
var lengthChoice = '';
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  lowerCaseChoice = confirm("Do you want to include lower case letters?");
  upperCaseChoice = confirm("Do you want  to include upper case letters?");
  numberChoice = confirm("Do you want to include numbers?");
  symbolChoice = confirm("Do you want to include special characters?");
  if (!lowerCaseChoice && !upperCaseChoice && !numberChoice && !symbolChoice) {
    alert("You must select at least one character type");
    return;
  }
  lengthChoice = prompt("How many characters would you like? Choose between 8-128");
  if (lengthChoice < 8) {
    alert("Password must contain at least 8 characters");
    return;
  }
  if (lengthChoice > 128) {
    alert("Password must be less than or equal to 128 characters");
    return;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
 var charSelect = '';
 passwordStr = '';
 for (i = 0; i < lengthChoice; i++) {
  charSelect = randomCharacterSet();
  passwordStr += randomCharacter(charSelect);
 }
 return passwordStr;

}

function randomCharacterSet() {
  var setNum = 0;
  while(true) {
    setNum = randInt(4);
    if (setNum === 0 && lowerCaseChoice === true) {
      return lowerCase;
    }
    if (setNum === 1 && upperCaseChoice === true) {
      return upperCase;
    }
    if (setNum === 2 && numberChoice === true) {
      return number;
    }
    if (setNum === 3 && symbolChoice === true) {
      return symbol;
    }
  }
}

function randomCharacter(charSelect) {
  var charNum = randInt(charSelect.length); 
  return charSelect.substring(charNum, charNum + 1)
}

function randInt(num) {
  return Math.floor(Math.random() * num);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
