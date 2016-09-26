var min = 1900,
max = min + 50,
select = document.getElementById('year');

for (var i = min; i<=max; i++){
   var opt = document.createElement('option');
   opt.innerHTML = i;
   select.appendChild(opt);
}
