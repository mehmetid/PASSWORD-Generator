// I had to adjust the wordbank, as each item in an array in javascript must be within parentheses. We'll eventually change it back
const wordBank = ["time","way","year","work","government","day"];

// Example usage:
const numOfWords = 2;

// run displayPassword when generatePasswordButton is clicked
document.getElementById("generatePasswordButton").addEventListener("click", displayPassword);

function generatePassword(wordBank, numWords) {
  if (!Array.isArray(wordBank) || wordBank.length === 0) {
    throw new Error('Word bank must be a filled array.');
  }

  if (numWords <= 0) {
    throw new Error('Number of words must be greater than 0.');
  }

  let password = '';

  for (let i = 0; i < numWords; i++) {
    const randIndex = Math.floor(Math.random() * wordBank.length);
    const randWord = wordBank[randIndex];

    password += randWord;

    if (i < numWords - 1) {
      password += ''; // In case if we want to add space between words
    }
  }

  return password;
}

function displayPassword () {
  // set a password using generatePassword
  let newPass = generatePassword(wordBank, numOfWords)
  // set the value within passwordinput equal to the new password
  document.getElementById("passwordinput").value = newPass;
}
