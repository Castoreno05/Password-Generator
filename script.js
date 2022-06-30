// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here

// List of numbers, special characters, uppercase and lowercase in arrays
// Use for a loop to randonly select from the arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~", '"'];
// console.log(uppercase);


function userInput() {
  // create var to hold answer to prompt/confirm.
  var pwdLength = prompt("Input a number for the length of the password (Between 8 - 128 characters)");
  // Conformation returns true if user selects the following.
  var bigLetters = confirm("Do you want UPPERCASE characters included?");
  var smallLetters = confirm("Do you want LOWERCASE characters included?");
  var uniqueCharacters = confirm("Do you want SPECIAL CHARACTERS included?");
  var userNumbers = confirm("Do you want NUMBERS included?");

  // Holds the input in an randomGenerator Object.
  var randomGenerator = {

    password: pwdLength,
    upper: bigLetters,
    lower: smallLetters,
    num: userNumbers,
    special: uniqueCharacters

  }
  // console.log(randomGenerator);
  return randomGenerator;

}

function generatePassword() {
  // userInput is placed in the generator variable and is used in the if statements 
  var generator = userInput();
  // How to randomly choose password criteria? Use array methods to combine all arryays into one array.
  var megaArray = [];
  var pwd = "";
  
  if(generator.upper){
    // If the user selects true, the uppercase array will be concatinated into the empty megaArray
    megaArray = megaArray.concat(uppercase);
    // The random uppercase length that is generated is placed in the randomUpper variable
    var randomUpper = [Math.floor(Math.random() * uppercase.length)];
    // console.log() to verify the random generation of uppercase.
    // console.log(randomUpper);
  }

  if(generator.lower){
    megaArray = megaArray.concat(lowercase);
    var randomLower = [Math.floor(Math.random() * lowercase.length)];
  }

  if(generator.num){
    megaArray = megaArray.concat(numbers);
    var randomNumber =  [Math.floor(Math.random() * numbers.length)];
  }

  if(generator.special){
    megaArray = megaArray.concat(specialCharacters);
    var randomSpecial = [Math.floor(Math.random() * specialCharacters.length)];
  }

  for(i = 0; i < generator.password; i++){
    pwd += megaArray[Math.floor(Math.random() * megaArray.length)];
  }
  // Generate random password and return the password.
  return pwd;
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
  // console.log(passwordLength);
// conformation = lowercase, uppercase, numeric, and special characters.
//  Variables that are used to generate a password
// Need to look for a confirm syntax for JS on the web.
  // let numbers = confirm("Do you want numbers");
// look for a confimred 
// Need a function to validate users answers.
// Need to check the values of the value to see if its equal to what i need. Use if and equality operators.
// if(numbers){

//}
 // Randomly choose characters
 // Create a string set equal to password var.

