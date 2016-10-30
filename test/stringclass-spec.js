// Imports chai dependencies here
const assert = require('chai').assert;

// Switch to TDD lingo.
const suite = describe;
const test = it;

// Imports source code for string class here.
require('../api/stringclass');


//
suite('hasVowels', () => {
  test('word that has a vowel in it', () => {
    assert.equal('hell'.hasVowels(), true);
  });
  test('An empty string', () => {
    assert.equal(''.hasVowels(), false);
  });
  test('numbers', () => {
    assert.equal('12345'.hasVowels(), false);
  });
  test('Alpha-numeric string', () => {
    assert.equal('123abc'.hasVowels(), true);
  });
});

