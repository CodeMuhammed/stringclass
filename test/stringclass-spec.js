// Imports chai dependencies here
const assert = require('chai').assert;

//
const testData = {
  empty: '',
  space: ' ',
  numbers: '12345',
  alphaNumeric: '123aBc',
  alpha: 'abCDef',
  stringWithSpace: ' heLL o ',
  stringWithSymbol: 'hELlo£$',
  question: 'hello ?',
  sentence: ' 123 Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ',
};

// Switch to TDD lingo.
const suite = describe;
const test = it;

// Imports source code for string class here.
require('../api/stringclass');


//
suite('hasVowels', () => {
  test('An empty string', () => {
    assert.isNotTrue(testData.empty.hasVowels());
  });
  test('numbers', () => {
    assert.isNotTrue(testData.numbers.hasVowels());
  });
  test('Alpha-numeric string', () => {
    assert.isTrue(testData.alphaNumeric.hasVowels());
  });
  test('Alphabets only string', () => {
    assert.isTrue(testData.alpha.hasVowels());
  });
  test('Alphabets with spaces', () => {
    assert.isTrue(testData.stringWithSpace.hasVowels());
  });
  test('Alphabets with symbols', () => {
    assert.isTrue(testData.stringWithSymbol.hasVowels());
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


//
suite('isQuestion', () => {
  test('An empty string', () => {
    assert.equal(testData.empty.isQuestion(), '');
  });
  test('question', () => {
    assert.isTrue(testData.question.isQuestion());
  });
});

//
suite('words', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.words().length === 0);
  });
  test('A single space character', () => {
    assert.isTrue(testData.space.words().length === 0);
  });
  test('a valid sentence with punctuations', () => {
    assert.isTrue(Array.isArray(testData.sentence.words()));
  });
});

//
suite('wordCount', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.wordCount() === 0);
  });
  test('a valid sentence with punctuations', () => {
    assert.isTrue(testData.sentence.wordCount() === testData.sentence.words().length);
  });
});

//
suite('toCurrency', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.toCurrency() === 'Invalid number');
  });
  test('numbers', () => {
    assert.isTrue('11111.11'.toCurrency() === '11,111.11');
  });
  test('Alpha-numeric string', () => {
    assert.isTrue(testData.alphaNumeric.toCurrency() === 'Invalid number');
  });
});

//
suite('fromCurrency', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.fromCurrency() === 'Invalid currency');
  });
  test('numbers', () => {
    assert.isTrue('11,111.11'.fromCurrency() === 11111.11);
  });
  test('Alpha-numeric string', () => {
    assert.isTrue(testData.alphaNumeric.fromCurrency() === 'Invalid currency');
  });
});

//
suite('inverseCase', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.inverseCase() === '');
  });
  test('numbers', () => {
    assert.isTrue(testData.numbers.inverseCase() === testData.numbers);
  });
  test('Alpha-numeric string', () => {
    assert.isTrue('123abc'.inverseCase() === '123ABC');
  });
  test('string', () => {
    assert.isTrue('mad HOuse'.inverseCase() === 'MAD hoUSE');
  });
});


//
suite('alternatingCase', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.alternatingCase() === '');
  });
  test('numbers', () => {
    assert.isTrue(testData.numbers.alternatingCase() === testData.numbers);
  });
  test('string', () => {
    assert.isTrue('Onomatopoeia'.alternatingCase() === 'oNoMaToPoEiA');
  });
});

//
suite('getMiddle', () => {
  test('An empty string', () => {
    assert.isTrue(testData.empty.getMiddle() === '');
  });
  test('A space character', () => {
    assert.isTrue(testData.space.getMiddle() === ' ');
  });
  test('string', () => {
    assert.isTrue('read'.getMiddle() === 'ea');
  });
  test('string', () => {
    assert.isTrue('reads'.getMiddle() === 'a');
  });
});
