var assert = require('chai').assert;
var Validator = require('../build/login.js');

var strLtr = 'allLetters';
    var strNm = '42154563';

describe("Validator", function(){
  before(function(){
    this.validator = new Validator();
  });

  after(function(){
    delete this.validator;
  });

  it("Should only accept letters", function(){
    assert.isNotFalse(this.validator.lettersOnly(strLtr), 'Numbers not allowed in this String!');
  });

  it("Should only allow 10 chars max for letters input", function(){
    assert.isBelow(this.validator.maxLen(strLtr), 11, 'String has more than 10 characters');
  });

  it("Should only accept numbers", function(){
    assert.isNotFalse(this.validator.numericOnly(strNm), 'Letter not allowed in this String!');
  });

  it("Should only allow 10 chars max for numbers input", function(){
    assert.isBelow(this.validator.maxLen(strNm), 11, 'String has more than 10 characters');
  });

})