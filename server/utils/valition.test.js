const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var nr = 123;
    expect(isRealString(nr)).toBe(false);

    var obj = {test: 'bla'};
    expect(isRealString(obj)).toBe(false);

    var arr = [1,2,3];
    expect(isRealString(arr)).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var str = '   ';
    expect(isRealString(str)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = 'Valid string'
    expect(isRealString(str)).toBe(true);
  });
});
