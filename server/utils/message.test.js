var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    const from = 'Felix';
    const text = 'This is a test';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});

  });

});


describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {
    const from = 'Felix';
    const latitude = 54;
    const longitude = 120;
    const url = 'https://www.google.com/maps?q=54,120';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
