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

/**
 * String.prototype.toUpper
 * This methods takes in a string and returns the uppercase version of it.
 * @return {String}.
 */
Object.defineProperty(String.prototype, 'toUpper', {
  value() {
    return this.toString().replace(/[a-z]/g, c => String.fromCharCode(c.charCodeAt(0) - 32));
  },
});

/**
 * String.prototype.toLower
 * This methods takes in a string and returns the uppercase version of it.
 * @return {String}.
 */
Object.defineProperty(String.prototype, 'toLower', {
  value() {
    return this.toString().replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 32));
  },
});

