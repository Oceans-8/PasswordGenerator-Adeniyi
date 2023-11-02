//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

//length, if outside 8-128, then return error
//4 separate questions
//- lowercase, uppercase, numeric, and/or special characters

// note when user writes a number in prompt it is treated as string not number so it has to be converted

// use The concat() method of Array instances is used to merge two or more arrays
// This method does not change the existing arrays, but instead returns a new array

//const aNumber = Number(window.prompt("Type a number", ""));

// window.prompt ("Would you like to include lower case letters? (okay for yes, cancel for no)");
//window.prompt ("Would you like to include upper case letters? (okay for yes, cancel for no)");
//window.prompt ("Would you like to include numeric digits? (okay for yes, cancel for no)");
//window.prompt ("Would you like to include symbols? (okay for yes, cancel for no)");
//return 'password';

//for loop to 128
//window.confirm

// next steps
// add loops
// check numbers
// empty initial
// letter inputs


var digits=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var uppercase=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbols=['!', '@', '#', '$', '%', '^', '&', '*', '?']


var generatePassword = function () {
  var LengthQ = parseInt(window.prompt ("How many characters would you like in your password?"));
  if (LengthQ <8 || LengthQ >128) {
    alert ("Invalid password length")
    return;
  }  

  var LowerCaseQ = window.confirm ("Would you like to include lower case letters?");
  var UpperCaseQ = window.confirm ("Would you like to include upper case letters?");
  var DigitsQ = window.confirm ("Would you like to include digits?");
  var SymbolsQ = window.confirm ("Would you like to include symbols?");
  

  var combinedArray = [];
  
  if(!LowerCaseQ && !UpperCaseQ && !DigitsQ && !SymbolsQ){
    alert('Invalid Password Parameters');
    return;
  }

  if(LowerCaseQ){
    combinedArray = combinedArray.concat(lowercase);
  }
  if(UpperCaseQ){
    combinedArray = combinedArray.concat(uppercase);
  }
  if(DigitsQ){
    combinedArray = combinedArray.concat(digits);
  }
  if(SymbolsQ){
    combinedArray = combinedArray.concat(symbols);
  }
 
  var password = '';

  for(var i = 0; i<LengthQ; i++){
    var randomCharIndex = Math.floor(Math.random() * combinedArray.length);
    var randomChar = combinedArray[randomCharIndex];

    password +=randomChar;
  }
  

  console.log(password);
  return password;

  console.log(combinedArray)
}

  
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
