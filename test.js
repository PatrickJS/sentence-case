/* global describe, it */
var assert       = require('assert');
var sentenceCase = require('./');

describe('sentence case', function () {
  it('should lower case a single word', function () {
    assert.equal(sentenceCase('test'), 'test');
    assert.equal(sentenceCase('TEST'), 'test');
  });

  it('should sentence case camel cased strings', function () {
    assert.equal(sentenceCase('testString'), 'test string');
  });

  it('should sentence case non-alphanumeric separators', function () {
    assert.equal(sentenceCase('path/case'), 'path case');
    assert.equal(sentenceCase('snake_case'), 'snake case');
  });

  it('should handle punctuation', function () {
    assert.equal(sentenceCase('"quotes"'), 'quotes');
  });

  it('should handle underscores between numbers', function () {
    assert.equal(sentenceCase('version0 21 0'), 'version 0 21 0');
    assert.equal(sentenceCase('version0_21 0'), 'version 0.21 0');
    assert.equal(sentenceCase('version0_21_0'), 'version 0.21.0');
  });

  it('should keep periods between numbers', function () {
    assert.equal(sentenceCase('version 0.45.0'), 'version 0.45.0');
    assert.equal(sentenceCase('version 0..78..0'), 'version 0.78.0');
  });
});
