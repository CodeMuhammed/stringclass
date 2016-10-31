// Imports chai dependencies here
const assert = require('chai').assert;

//
const testData = {
  empty: '',
  numbers: '12345',
  alphaNumeric: '123aBc',
  alpha: 'abCDef',
  stringWithSpace: ' heLL o ',
  stringWithSymbol: 'hELlo£$',
};

// Switch to TDD lingo.
const suite = describe;
const test = it;

// Imports source code for string class here.
require('../api/stringclass');


//
suite('hasVowels', () => {
  test('An empty string', () => {
    assert.equal(testData.empty.hasVowels(), false);
  });
  test('numbers', () => {
    assert.equal(testData.numbers.hasVowels(), false);
  });
  test('Alpha-numeric string', () => {
    assert.equal(testData.alphaNumeric.hasVowels(), true);
  });
  test('Alphabets only string', () => {
    assert.equal(testData.alpha.hasVowels(), true);
  });
  test('Alphabets with spaces', () => {
    assert.equal(testData.stringWithSpace.hasVowels(), true);
  });
  test('Alphabets with symbols', () => {
    assert.equal(testData.stringWithSymbol.hasVowels(), true);
  });
});


//
suite('toUpper', () => {
  test('An empty string', () => {
    assert.equal(testData.empty.toUpper(), '');
  });
  test('numbers', () => {
    assert.equal(testData.numbers.toUpper(), '12345');
  });
  test('Alpha-numeric string', () => {
    assert.equal(testData.alphaNumeric.toUpper(), '123ABC');
  });
  test('Alphabets only string', () => {
    assert.equal(testData.alpha.toUpper(), 'ABCDEF');
  });
  test('Alphabets with spaces', () => {
    assert.equal(testData.stringWithSpace.toUpper(), ' HELL O ');
  });
  test('Alphabets with symbols', () => {
    assert.equal(testData.stringWithSymbol.toUpper(), 'HELLO£$');
  });
});

//
suite('toLower', () => {
  test('An empty string', () => {
    assert.equal(testData.empty.toLower(), '');
  });
  test('numbers', () => {
    assert.equal(testData.numbers.toLower(), '12345');
  });
  test('Alpha-numeric string', () => {
    assert.equal(testData.alphaNumeric.toLower(), '123abc');
  });
  test('Alphabets only string', () => {
    assert.equal(testData.alpha.toLower(), 'abcdef');
  });
  test('Alphabets with spaces', () => {
    assert.equal(testData.stringWithSpace.toLower(), ' hell o ');
  });
  test('Alphabets with symbols', () => {
    assert.equal(testData.stringWithSymbol.toLower(), 'hello£$');
  });
});

//
suite('ucFirst', () => {
  test('An empty string', () => {
    assert.equal(testData.empty.ucFirst(), '');
  });
  test('numbers', () => {
    assert.equal(testData.numbers.ucFirst(), '12345');
  });
  test('Alpha-numeric string', () => {
    assert.equal(testData.alphaNumeric.ucFirst(), '123aBc');
  });
  test('Alphabets only string', () => {
    assert.equal(testData.alpha.ucFirst(), 'AbCDef');
  });
  test('Alphabets with spaces', () => {
    assert.equal(testData.stringWithSpace.ucFirst(), ' heLL o ');
  });
  test('Alphabets with symbols', () => {
    assert.equal(testData.stringWithSymbol.ucFirst(), 'HELlo£$');
  });
});
