// Imports chai dependencies here
const assert = require('chai').assert;

// Imports source code for string class here.
require('../api/stringclass');

// Test data.
const testData = {
  empty: '',
  space: ' ',
  numbers: '12345',
  digit: '3',
  alphabet: 'a',
  alphaNumeric: '123aBc',
  alpha: 'abCDef',
  stringWithSpace: ' heLL o ',
  stringWithSymbol: 'hELlo£$',
  question: 'hello ?',
  sentence: ' 123 Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ',
};

describe('hasVowels', () => {
  it('Returns false for an empty string', () => {
    assert.isNotTrue(testData.empty.hasVowels());
  });
  it('Returns false for numbers', () => {
    assert.isNotTrue(testData.numbers.hasVowels());
  });
  it('Should return true when the string has a vowel', () => {
    assert.isTrue(testData.alphaNumeric.hasVowels());
  });
});

describe('toUpper', () => {
  it('Should return an empty string', () => {
    assert.equal(testData.empty.toUpper(), '');
  });
  it('Should return the number unchanged', () => {
    assert.equal(testData.numbers.toUpper(), '12345');
  });
  it('Should convert the alphabets to uppercase', () => {
    assert.equal(testData.alphaNumeric.toUpper(), '123ABC');
  });
});

describe('toLower', () => {
  it('Should return a empty string', () => {
    assert.equal(testData.empty.toLower(), '');
  });
  it('Should return numbers', () => {
    assert.equal(testData.numbers.toLower(), '12345');
  });
  it('Should convert the Alphabets in the string to lower case', () => {
    assert.equal(testData.alphaNumeric.toLower(), '123abc');
  });
});

describe('ucFirst', () => {
  it('Should return an empty string', () => {
    assert.equal(testData.empty.ucFirst(), '');
  });
  it('Should return the numbers unchanged', () => {
    assert.equal(testData.numbers.ucFirst(), '12345');
  });
  it('Transforms the first character to uppercase', () => {
    assert.equal(testData.alpha.ucFirst(), 'AbCDef');
  });
});

describe('isQuestion', () => {
  it('Returns an empty string', () => {
    assert.equal(testData.empty.isQuestion(), '');
  });
  it('Should return true if string is a question', () => {
    assert.isTrue(testData.question.isQuestion());
  });
});

describe('words', () => {
  it('Returns an array of length 0', () => {
    assert.isTrue(testData.empty.words().length === 0);
  });
  it('Returns an array of length 0', () => {
    assert.isTrue(testData.space.words().length === 0);
  });
  it('Returns an array of valid tokens in a string', () => {
    assert.isTrue(Array.isArray(testData.sentence.words()));
  });
});

describe('wordCount', () => {
  it('Returns 0 for an empty string', () => {
    assert.isTrue(testData.empty.wordCount() === 0);
  });
  it('Returns the length of valid tokens in a string', () => {
    assert.isTrue(testData.sentence.wordCount() === testData.sentence.words().length);
  });
});

describe('toCurrency', () => {
  it('Returns Invalid number', () => {
    assert.isTrue(testData.empty.toCurrency() === 'Invalid number');
  });
  it('Returns currency rep of string', () => {
    assert.isTrue('11111.111'.toCurrency() === '11,111.11');
  });
});

describe('fromCurrency', () => {
  it('Returns an empty string', () => {
    assert.isTrue(testData.empty.fromCurrency() === 'Invalid currency');
  });
  it('Returns the number representation of the curency', () => {
    assert.isTrue('11,111.11'.fromCurrency() === 11111.11);
  });
  it('Should return invalid', () => {
    assert.isTrue(testData.alphaNumeric.fromCurrency() === 'Invalid currency');
  });
});

describe('inverseCase', () => {
  it('Should return an empty string', () => {
    assert.isTrue(testData.empty.inverseCase() === '');
  });
  it('Should return the same number', () => {
    assert.isTrue(testData.numbers.inverseCase() === testData.numbers);
  });
  it('Should convert the alphabet to inverse case', () => {
    assert.isTrue('123abc'.inverseCase() === '123ABC');
  });
  it('Should return an inverse case of the string', () => {
    assert.isTrue('mad HOuse'.inverseCase() === 'MAD hoUSE');
  });
});

describe('alternatingCase', () => {
  it('Returns an empty string', () => {
    assert.isTrue(testData.empty.alternatingCase() === '');
  });
  it('Should return the same number', () => {
    assert.isTrue(testData.numbers.alternatingCase() === testData.numbers);
  });
  it('Should return an alternating cased version of the string', () => {
    assert.isTrue('Onomatopoeia'.alternatingCase() === 'oNoMaToPoEiA');
  });
});

describe('getMiddle', () => {
  it('Returns empty string', () => {
    assert.isTrue(testData.empty.getMiddle() === '');
  });
  it('Returns a space character', () => {
    assert.isTrue(testData.space.getMiddle() === ' ');
  });
  it('Returns the middle two substring for an even length string', () => {
    assert.isTrue('read'.getMiddle() === 'ea');
  });
  it('Returns the middle character for an odd length string', () => {
    assert.isTrue('reads'.getMiddle() === 'a');
  });
});

describe('numberWords', () => {
  it('Should return Invalid for an empty string', () => {
    assert.isTrue(testData.empty.numberWords() === 'Invalid number string');
  });
  it('Should return Invalid for a space character', () => {
    assert.isTrue(testData.space.numberWords() === 'Invalid number string');
  });
  it('Should return the string representation of the number', () => {
    assert.isTrue('325'.numberWords() === 'three two five');
  });
});

describe('isDigit', () => {
  it('Should return Invalid for an empty string', () => {
    assert.isTrue(testData.empty.isDigit() === 'Invalid digit');
  });
  it('Should return Invalid for a space character', () => {
    assert.isTrue(testData.space.isDigit() === 'Invalid digit');
  });
  it('Returns true if string is a digit', () => {
    assert.isTrue(testData.digit.isDigit());
  });
  it('Should not be true if the string is an alphabet', () => {
    assert.isNotTrue(testData.alphabet.isDigit());
  });
});

describe('doubleCheck', () => {
  it('Returns false for an empty string', () => {
    assert.isNotTrue(testData.empty.doubleCheck());
  });
  it('Returns false for a space character', () => {
    assert.isNotTrue(testData.space.doubleCheck());
  });
  it('Returns true for strings that contains doubles', () => {
    assert.isTrue('aa'.doubleCheck());
  });
});
