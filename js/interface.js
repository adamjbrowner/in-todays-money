$(document).ready(function() {
  $('#calculator').submit( function(event) {
    event.preventDefault()
    var startingFigure = $("#starting-figure").val();
    var calculation = new Calculation(startingFigure);
    calculation.calculateFinal()
    $('#final-figure').text("£" + calculation.todaysMoney);
  })
})
