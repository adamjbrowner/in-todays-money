'use strict';

describe('Calculation', function() {
  var calculation;

  beforeEach(function() {
    calculation = new Calculation(300);
  });

  it('Take an amount as a starting parameter', function() {
    expect(calculation.startingFigure).toEqual(300);
  })

  it('Stores a default inflation rate', function() {
    expect(calculation.inflationMultiplier).toEqual(92.4);
  })

  it('Multiples given figure by inflation multiplier', function() {
    calculation.calculateFinal()
    expect(calculation.todaysMoney).toEqual(27720);
  })

})
