const { increment } = require('./increment');

describe('increment', () => {
  test('should return error when options.type is not a valid type', () => {
    const { error } = increment({ type: 'alpha' }, 3);
    expect(error).toEqual(new Error('Invalid type: alpha'));
  });

  test('should return error when options.type is \'integer\' but the value passed in is not a number', () => {
    const { error } = increment({ type: 'integer' }, '3');
    expect(error).toEqual(new Error('Value with options.type \'integer\' must be of type \'number\''));
  });

  test('should increment value by 1 when type is \'integer\'', () => {
    const { value } = increment({ type: 'integer' }, 3);
    expect(value).toBe(4);
  });
});
