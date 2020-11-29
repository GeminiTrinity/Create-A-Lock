
var symbols = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numbers = [
  '0', 
  '1',
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var capitals = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function choosePasswordOptions() {
  var choseSymbols = confirm(
    "Please click OK if you would like your password to have symbols."
  );
  var choseNumbers = confirm(
    "Please click OK if you would like your password to have numbers."
  );
  var choseLowercase = confirm(
    "Please click OK if you would like your password to have lowercase letters."
  );
  var choseCapitals = confirm(
    "Please click OK if you would like your password to have capital letters."
  );

  var chosenOptions = {
    choseSymbols: choseSymbols,
    choseNumbers: choseNumbers,
    choseLowercase: choseLowercase,
    choseCapitals: choseCapitals,
  };

  return chosenOptions; 
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
