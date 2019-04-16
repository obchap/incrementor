const assert = require('assert');

const Incrementor = require('./index');

describe('Incrementor', () => {
  test('should increment value by 1', () => {
    const incrementor = new Incrementor();
    const value = incrementor.increment(3);
    expect(value).toBe(4);
  });
});