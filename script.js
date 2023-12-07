// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let specialChars = '!$#%&@^*';
let numbers ='0123456789';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 

  passwordText.value = password;

}
function generatePassword() {
  var randomPassword = '';
  let userChoiceString = '';

  let passwordLength = prompt("Please enter the length of the password");

  if (passwordLength >= 8 && passwordLength <= 128){
  
    let upperCaseBoolean = confirm('Do you want upper case characters?');
    if (upperCaseBoolean === true){
      userChoiceString = userChoiceString + upperCaseChars;
    }
    console.log(userChoiceString);
    let lowerCaseBoolean = confirm('Do you want lower case characters?');
    if (lowerCaseBoolean === true){
      userChoiceString = userChoiceString + lowerCase;
    }
    console.log(userChoiceString);
    let specialCharsBoolean = confirm('Do you want special characters?');
    if (specialCharsBoolean === true){
      userChoiceString = userChoiceString + specialChars;
    }
    console.log(userChoiceString);
    let numbersBoolean = confirm('Do you want numbers?');
    if (numbersBoolean === true){
      userChoiceString = userChoiceString + numbers;
    }
    console.log(userChoiceString);

    console.log(upperCaseBoolean, lowerCaseBoolean, specialCharsBoolean, numbersBoolean);

    for(i=0; i<passwordLength; i++){
      // generate random index
      // append random character from user choice strng into random passwords
      randomPassword += userChoiceString[Math.floor(Math.random()*userChoiceString.length)]
    }
    return randomPassword
  } else {
    alert("incorrect length");
  }


  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


