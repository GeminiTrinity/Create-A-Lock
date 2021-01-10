
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
  var length = parseInt(prompt(
    "How many characters would you like your password to be?")
  );
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
    length: length,
    choseSymbols: choseSymbols,
    choseNumbers: choseNumbers,
    choseLowercase: choseLowercase,
    choseCapitals: choseCapitals,
  };

  return chosenOptions; 
}

function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randomSet = arr[random];

  return randomSet;
}

function generatePassword() {
  var options = choosePasswordOptions();

  var password = [];

  var possibleOptions = [];

  var guaranteedOptions = []; 

  if (options.choseSymbols) {
    possibleOptions = possibleOptions.concat(symbols);
    guaranteedOptions.push(getRandom(symbols));
  }

  if (options.choseNumbers) {
    possibleOptions = possibleOptions.concat(numbers);
    guaranteedOptions.push(getRandom(numbers));
  }

  if (options.choseLowercase) {
    possibleOptions = possibleOptions.concat(lowercase);
    guaranteedOptions.push(getRandom(lowercase));
  }

  if (options.choseCapitals) {
    possibleOptions = possibleOptions.concat(capitals);
    guaranteedOptions.push(getRandom(capitals));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleOptions = getRandom(possibleOptions);
    password.push(possibleOptions);
  }

  for (var i = 0; i < guaranteedOptions.length; i++) {
    password[i] = guaranteedOptions[i];
  }
  return password.join('');
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
