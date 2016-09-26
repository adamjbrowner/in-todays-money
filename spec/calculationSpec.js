'use strict';

describe('Calculation', function() {
  var calculation;

  beforeEach(function() {
    calculation = new Calculation(300, "1916");
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

  it("Stores a year with which to calculate inflation", function() {
    expect(calculation.year).toEqual("1916");
  })

  it("calculates inflastion based on year", function() {
    var newCalculation = new Calculation(300, "1910");
    newCalculation.calculateMultiplier()
    expect(newCalculation.inflationMultiplier).toEqual(107);
  })
})
