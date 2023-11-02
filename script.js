var digits=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var uppercase=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbols=['!', '@', '#', '$', '%', '^', '&', '*', '?', '(', ')', '+', '-', ',', '.', '/', ':', ';', '<', '=', '>', '[', ']', '{', '}', '~', '`', '|']

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



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.addEventListener("click", writePassword);
