const Incrementor = require('./index');

describe('Incrementor', () => {
  describe('increment', () => {
    test('should return error when type is not a valid type', () => {
      const incrementor = new Incrementor({ type: 'alpha' });
      const { error } = incrementor.increment(3);
      expect(error).toEqual(new Error('Unsupported type: alpha'));
    });

    test('should increment value by 1 when type is \'integer\'', () => {
      const incrementor = new Incrementor({ type: 'integer' });
      const { value } = incrementor.increment(3);
      expect(value).toBe(4);
    });

    test('should increment value by 1 when type is \'numeric\'', () => {
      const incrementor = new Incrementor({ type: 'numeric', leftPadValue: 4 });
      const { error, value } = incrementor.increment(3);
      expect(error).toBeNull();
      expect(value).toBe('0004');
    });
  });
});
