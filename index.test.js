const assert = require('assert');

const Incrementor = require('./index');

describe('Incrementor', () => {
  test('should increment value by 1 when type is \'integer\'', () => {
    const incrementor = new Incrementor({ type: 'integer' });
    const { value } = incrementor.increment(3);
    expect(value).toBe(4);
  });

  test('should return error when type is not \'integer\'', () => {
    const incrementor = new Incrementor({ type: 'alpha' });
    const { error } = incrementor.increment(3);
    expect(error).toEqual(new Error(`Unsupported type: alpha`));
  });
});