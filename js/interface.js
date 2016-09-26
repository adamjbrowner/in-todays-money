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

var min = 1900,
max = min + 50,
select = document.getElementById('year');

for (var i = min; i<=max; i++){
   var opt = document.createElement('option');
   opt.innerHTML = i;
   select.appendChild(opt);
}
