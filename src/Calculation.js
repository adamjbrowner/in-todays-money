'use strict';

function Calculation(startingFigure, year) {
  this.startingFigure = startingFigure
  this.year = year
  this.inflationMultiplier = 92.4
}

Calculation.prototype.calculateFinal = function() {
  this.todaysMoney = this.startingFigure * this.inflationMultiplier
};

Calculation.prototype.calculateMultiplier = function() {
  var multipliers = {
    "1900": 117,
    "1901": 111,
    "1902": 110,
    "1903": 110,
    "1904": 110,
    "1905": 110,
    "1906": 110,
    "1907": 110,
    "1908": 108,
    "1909": 108,
    "1910": 107,
    "1911": 106,
    "1912": 106,
    "1913": 103,
    "1914": 104,
    "1915": 104,
    "1916": 92.4,
    "1917": 78.2,
    "1918": 62.5,
    "1919": 51.2,
    "1920": 46.5,
    "1921": 40.3,
    "1922": 44.1,
    "1923": 51.3,
    "1924": 54.6,
    "1925": 54.9,
    "1926": 54.8,
    "1927": 55.2,
    "1928": 56.6,
    "1929": 56.7,
    "1930": 57.3,
    "1931": 58.9,
    "1932": 61.6,
    "1933": 63.2,
    "1934": 64.6,
    "1935": 64.6,
    "1936": 64.1,
    "1937": 63.7,
    "1938": 61.6,
    "1939": 60.6,
    "1940": 58.9,
    "1941": 50.5,
    "1942": 45.5,
    "1943": 42.5,
    "1944": 41.1,
    "1945": 40,
    "1946": 39,
    "1947": 37.8,
    "1948": 35.3,
    "1949": 32.8,
    "1950": 31.9
  };
  this.inflationMultiplier = multipliers[this.year];
};
