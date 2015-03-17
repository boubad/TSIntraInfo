//crypto.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import MyCrypto = require('../../../src/data/domain/crypto');
//
describe("My Crypto tests ", () => {
  var man: MyCrypto;
  beforeEach(() => {
    man = new MyCrypto();
  });
  it(" md5 method ", () => {
    var src = 'bouba256';
    var dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
    var x = man.md5(src);
    expect(x).toEqual(dest);
  });
});
