$(document).ready(function() {
  $('#calculator').submit( function(event) {
    event.preventDefault()
    var startingFigure = $("#starting-figure").val();
    var year = $("#year").val();
    var calculation = new Calculation(startingFigure, year);
    calculation.calculateMultiplier();
    calculation.calculateFinal();
    $('#final-figure').text("£" + calculation.todaysMoney.toFixed(2));

    var numberOfCoins = calculation.todaysMoney / 100
    for (i = 1; i < numberOfCoins; i ++) {
      $("#coins").prepend('<img class="coin" src="images/coin.png" />');
    };
  });
});
