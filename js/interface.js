$(document).ready(function() {
  $('#calculator').submit( function(event) {
    event.preventDefault()
    var startingFigure = $("#starting-figure").val();
    var year = $("#year").val();
    var calculation = new Calculation(startingFigure, year);
    calculation.calculateMultiplier()
    calculation.calculateFinal()
    $('#final-figure').text("£" + calculation.todaysMoney.toFixed(2));
  })
})
