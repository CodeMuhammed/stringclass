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

/**
 * String.prototype.ucFirst
 * This methods returns the string in question but changes the First Character to an Upper case
 * @return {String}.
 */
Object.defineProperty(String.prototype, 'ucFirst', {
  value() {
    return this.toString().replace(/^\S/, char => char.toUpper());
  },
});

/**
 * String.prototype.isQuestion
 * This methods return true if the string is a question (ending with a question mark).
 * @return {boolean}.
 */
Object.defineProperty(String.prototype, 'isQuestion', {
  value() {
    return /\?$/.test(this.toString());
  },
});

/**
 * String.prototype.words
 * This methods returns a list of the words in the string, as an Array.
 * @return {Array}.
 */
Object.defineProperty(String.prototype, 'words', {
  value() {
    return !!this.toString() && this.toString() !== ' ' ? this.toString().match(/\w+/g) : [];
  },
});

/**
 * String.prototype.wordCount
 * This returns the number of words in the string.
 * @return {string}.
 */
Object.defineProperty(String.prototype, 'wordCount', {
  value() {
    return !!this.toString() && this.toString() !== ' ' ? this.toString().words().length : 0;
  },
});

/**
 * String.prototype.toCurrency
 * This returns a currency representation of the String
 * @return {string}.
 */
Object.defineProperty(String.prototype, 'toCurrency', {
  value() {
    const str = this.toString();
    return !!str && !(str === ' ')
           && (/^-?\d*[.]?\d+$/.test(str))
           ? str.split(/(?=(?:\d{3})+(?:\.|$))/g).join(',')
           : 'Invalid number';
  },
});

/**
 * String.prototype.fromCurrency
 * This returns a number representation of the Currency
 * @return {number}.
 */
Object.defineProperty(String.prototype, 'fromCurrency', {
  value() {
    const str = this.toString();
    return !!str && !(str === ' ')
           && (/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(str))
           ? parseFloat(str.replace(/[,]/g, ''))
           : 'Invalid currency';
  },
});

/**
 * String.prototype.inverseCase
 * This returns each letter in the string as an inverse of its current case
 * @return {string}.
 */
Object.defineProperty(String.prototype, 'inverseCase', {
  value() {
    const str = this.toString();
    return str.replace(/[a-zA-Z]/g, c => (/[A-Z]/g.test(c) ? c.toLower() : c.toUpper()));
  },
});

/**
 * String.prototype.alternatingCase
 * This returns each letter in the string as an inverse of its current case
 * @return {string}.
 */
Object.defineProperty(String.prototype, 'alternatingCase', {
  value() {
    const str = this.toString();
    return str.replace(/[a-zA-Z]/g, (c, i) => (i % 2 === 0 ? c.toLower() : c.toUpper()));
  },
});


