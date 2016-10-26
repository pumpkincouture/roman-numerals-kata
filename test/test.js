var expect = require('chai').expect;

var convert = require('../src/converter').convert;

describe('Converter', function() {
  context('Converts numbers to roman numerals', function() {
    it('Converts 1 to I', function() {
      expect(convert(1)).to.equal("I");
    });

    it('Converts 2 to II', function() {
      expect(convert(2)).to.equal("II");
    });

    it('Converts 3 to III', function() {
      expect(convert(3)).to.equal("III");
    });

    it('Converts 4 to IV', function() {
      expect(convert(4)).to.equal("IV");
    });

    it('Converts 5 to V', function() {
      expect(convert(5)).to.equal("V");
    });

    it('Converts 200 to CC', function() {
      expect(convert(200)).to.equal("CC");
    });

    it('Converts 1525 to MDXXV', function() {
      expect(convert(1525)).to.equal("MDXXV")
    });
  });
});
