'use strict';

describe('Calculation', function() {

  beforeEach(function() {
    var calculation = new Calculation(300);
  });

  it('Take an amount as a starting parameter', function() {
    var calculation = new Calculation(300);
    expect(calculation.startingFigure).toEqual(300);
  })
})
