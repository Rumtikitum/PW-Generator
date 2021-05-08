//Primary initiating function to log user response. Confirms choices.

var promptingPW = function() {
  // How long?
  window.alert("Welcome to BEST PASSWORD GENERATOR 7k! Allow me to assist you today!")

  console.log(promptLength)
  var promptLength = window.prompt("How long would you like your password? Between 8-128")


  // Upper case confirmation
  var confirmUpper = window.confirm ("Would you like your password to have uppercase letters?")
    if (confirmUpper) {
      window.alert("Perfect we will include uppercase letters")
    } else {
      window.alert("No uppercases will be used")
    } 

  // Lower case confirmation
  var confirmLower = window.confirm ("Would you like your password to contain lower case letters?")
    if (confirmLower) {
      window.alert("Perfect we will include lowercase letters")
    } else {
      window.alert("No lowercases will be used")
    } 

  //Number Confirmation
  var confirmNum = window.confirm ("Would you like to have numbers in your password?")
    if (confirmNum) {
      window.alert("Perfect we will include Numbers")
    } else {
      window.alert("No Numbers will be used")
    } 

  var confirmSpec = window.confirm ("Would you like to have special characters in your password? ex. @#$%^")
    if (confirmSpec) {
      window.alert("Perfect we will include special characters")
    } else {
      window.alert("No special characters will be used")
    } 
}

document.getElementById("generate").onclick = promptingPW();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var promptingPW = function() {
  var promptLength = window.prompt("How long would you like your password? Between 8-128")
  // Upper case confirmation
  var confirmUpper = window.confirm ("Would you like your password to have uppercase letters?")
    if (confirmUpper) {
      window.alert("Perfect we will include uppercase letters")
    } else {
      window.alert("No uppercases will be used")
    } 

  // Lower case confirmation
  var confirmLower = window.confirm ("Would you like your password to contain lower case letters?")
    if (confirmLower) {
      window.alert("Perfect we will include lowercase letters")
    } else {
      window.alert("No lowercases will be used")
    } 

  //Number Confirmation
  var confirmNum = window.confirm ("Would you like to have numbers in your password?")
    if (confirmNum) {
      window.alert("Perfect we will include Numbers")
    } else {
      window.alert("No Numbers will be used")
    } 

  var confirmSpec = window.confirm ("Would you like to have special characters in your password? ex. @#$%^")
    if (confirmSpec) {
      window.alert("Perfect we will include special characters")
    } else {
      window.alert("No special characters will be used")
    } 
}

