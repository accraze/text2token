var expect = require('chai').expect;
var lib = require('./index');

describe('text2token', function() {
  it('should throw an error if no path is given', function () {
    expect(lib.text2token).to.throw('path is required');
  });
  
  it('should return an object of lines and tokens', function () {
    var conversion = lib.text2token('./src/bigtext.txt');

    expect(conversion.tokens).to.be.an('array');
    expect(conversion.tokens).to.have.length(109);
    expect(conversion.tokens).to.include('GitHub,');

    expect(conversion.tokens).to.be.an('array');
    expect(conversion.lines).to.have.length(5116);
    expect(conversion.lines).to.include('gubergren');
  });
})

