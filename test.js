var assert = require('chai').assert;
var Validator = require('../build/login.js');

describe("Validator", function(){
  before(function(){
    this.validator = new Validator();
  });

  after(function(){
    delete this.validator;
  });

  it("Should only accept letters", function(){
    assert.isNotFalse(this.validator.lettersOnly('str'), 'Numbers not allowed in this String!');
  });

  it("Input should only allow 10 chars max", function(){
    assert.isBelow(this.validator.maxLen('stevenandr'), 11, 'String has more than 10 characters');
  });

  it("Should only accept numbers", function(){
    assert.isNotFalse(this.validator.numericOnly('84545'), 'Letter not allowed in this String!');
  });

})