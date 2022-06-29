// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here

// Use for a loop to randonly select from the arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~", '"'];

// console.log(uppercase);

function generatePassword() {
  var generate = userInput()



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// PsuedoCode

// prompt = length (8-128 characters)



// 6-26

  // console.log(passwordLength);
// conformation = lowercase, uppercase, numeric, and special characters.
//  Variables that are used to generate a password

// Need to look for a confirm syntax for JS on the web.
  // let numbers = confirm("Do you want numbers");
// look for a confimred 
// create var to hold answer to prompt/confirm.
// Need a function to validate users answers.
// Need to check the values of the value to see if its equal to what i need. Use if and equality operators.
// if(numbers){

//}
// List of numbers, special characters, uppercase and lowercase
 // array
 // How to randomly choose password criteria? Use array methods to combine all arryays into one array.
 // Randomly choose characters
 // Create a string set equal to password var.
// Generate random password and return the password.
