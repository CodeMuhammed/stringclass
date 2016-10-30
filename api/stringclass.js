// This module extends the String class in Javascript. Using Prototype Oriented Programming, method

/**
 * String.prototype.hasVowels
 * This methods takes in a string and tells the client wether it contails vowels ie (a e i o 'or' u)
 * @return {boolean}.
 */
Object.defineProperty(String.prototype, 'hasVowels', {
  value() {
    return /[aeiou]/.test(this.toString());
  },
});
