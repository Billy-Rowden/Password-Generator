let charOptions = [];
let characterLength = 0;

// Array of special characters to be included in password
const specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  const correctPrompts = getPasswordOptions();
  const passwordText = document.querySelector('#password');
  
  if (correctPrompts) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  charOptions = [];
  
  while(true) {
    characterLength = parseInt(prompt("How long would you like your password to be? Choose a length between 8 and 128 characters."));
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert('Please enter a length between 8 and 128.');
    } else {
      break;
    }
  }

  let selectedCharTypes = 0;

  while (selectedCharTypes === 0) {
    if (confirm('Would you like to include special characters in your password? Hit OK for yes, and Cancel for No.')) {
      charOptions = charOptions.concat(specialCharacters)
      selectedCharTypes++;
    }
    
    if (confirm('Would you like to include numbers in your password? Hit OK for yes, and Cancel for No.')) {
      charOptions = charOptions.concat(numericCharacters)
      selectedCharTypes++;
    }
    
    if (confirm('Would you like to include lowercase letters in your password? Hit OK for yes, and Cancel for No.')){
      charOptions = charOptions.concat(lowerCasedCharacters)
      selectedCharTypes++;
    }
    
    if (confirm('Would you like to include uppercase letters in your password? Hit OK for yes, and Cancel for No.')) {
      charOptions = charOptions.concat(upperCasedCharacters)
      selectedCharTypes++;
    };

    if (selectedCharTypes === 0) {
      alert('Please select at least one character type.');
    }

    return true;
  }
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  for (let i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * charOptions.length);
    password = password + charOptions[randomIndex];
  }
  return password;
}