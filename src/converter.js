var numeral = function(arabic, base) {
  return { arabic: arabic, base: base };
}

const numerals = [ 
  numeral(1000, 'M'),
  numeral(500, 'D'),
  numeral(100, 'C'),
  numeral(10, 'X'),
  numeral(5, 'V'),
  numeral(4, 'IV'),
  numeral(1, 'I')
]


function convert(number) {
  var result = "";

  numerals.forEach(function(numeral) {
    while (number >= numeral.arabic) {
      result += numeral.base;
      number -= numeral.arabic
    }
  });

  return result;
}

module.exports.convert = convert;
