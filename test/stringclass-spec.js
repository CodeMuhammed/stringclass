// Imports chai dependencies here
const assert = require('chai').assert;

//
const testData = {
  empty: '',
  numbers: '12345',
  alphaNumeric: '123abc',
  alpha: 'abcdef',
  stringWithSpace: ' hell o ',
  stringWithSymbol: 'hello£$',
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

