const wordBank = ['apple','banana','cherry','grape','orange','pear','kiwi','strawberry','blueberry','watermelon','pineapple','mango','peach',
    'apricot','lemon','lime','pomegranate','raspberry']

function generatePassword(wordBank, numOfWords) {
  if (!Array.isArray(wordBank) || wordBank.length === 0) {
    throw new Error('Word bank must be a filled array.');
  }

  if (numOfWords <= 0) {
    throw new Error('Number of words must be greater than 0.');
  }

  let password = '';

  for (let i = 0; i < numOfWords; i++) {
    const randIndex = Math.floor(Math.random() * wordBank.length);
    const randWord = wordBank[randIndex];
    password += randWord;

    if (i < numOfWords - 1) {
      password += ''; // In case if we want to add space between words
    }
  }

  return password;
}

// Example usage:
const numOfWords = 2;

const password = generatePassword(wordBank, numOfWords);
console.log(password);