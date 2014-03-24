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
    assert.equal(sentenceCase('dot.case'), 'dot case');
    assert.equal(sentenceCase('path/case'), 'path case');
  });

  it('should handle punctuation', function () {
    assert.equal(sentenceCase('"quotes"'), 'quotes');
  });
});
