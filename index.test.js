const assert = require('assert');

const Incrementor = require('./index');

describe('Incrementor', () => {
  test('should increment value by 1 when type is \'num\'', () => {
    const incrementor = new Incrementor('num');
    const value = incrementor.increment(3);
    expect(value).toBe(4);
  });

  test('should return error when type is not \'num\'', () => {
    const incrementor = new Incrementor('alpha');
    const value = incrementor.increment(3);
    expect(value).toEqual(new Error(`Unsupported type: alpha`));
  });
});