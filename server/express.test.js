const request = require('request');

describe('Server Tests', () => {
  test('Should respond with one listing when GET is reached', (done) => {
    request({
      url: 'http://127.0.0.1:3004/listing/1',
      method: 'GET',
    }, (error, response, body) => {
      const listing = JSON.parse(body);
      expect(listing.id).toBe(1);
      done();
    });
  });
});
