var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add', function() {
    calculator.add(5)
    assert.equal(5, calculator.runningTotal);
  });

  it('should be able to subtract', function() {
    calculator.subtract(4)
    assert.equal(-4, calculator.runningTotal);
  }); 

  it('should be able to multiply', function() {
    calculator.multiply(3)
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to divide', function() {
    calculator.divide(2)
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to handle multiple operations', function() {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal);
  }); 

  it('should be able to clear', function() {
    calculator.add(5)
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal);
  });

});
