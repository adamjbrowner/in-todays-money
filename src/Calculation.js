'use strict';

function Calculation(startingFigure) {
  this.startingFigure = startingFigure
  this.inflationMultiplier = 92.4
}

Calculation.prototype.calculateFinal = function() {
  this.todaysMoney = this.startingFigure * this.inflationMultiplier
};
