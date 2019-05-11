var assert = require('chai').assert;

describe("Simple assert", function(){
  it("foo !== bar", function(){
    assert('foo' !== 'bar', 'foo is not bar');
  });
})

describe("Numeric calculations", function(){
  it('Addition: Result should be 10', function(){
    assert.equal(5+5, 10);
  });

  it('Subtract: Result should be 4', function(){
    assert.equal(10-6, 4);
  });

  it('Less than', function(){
    assert.isBelow(4, 5, 'Number is not below 5');
  });
})