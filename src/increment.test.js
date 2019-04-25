const { increment } = require('./increment');
const { incrementorType } = require('./enums');

describe('increment', () => {
  test('should return error when options.type is not a valid type', () => {
    const { error, value } = increment({ type: 'alpha' }, 3);
    expect(value).toBeNull();
    expect(error).toEqual(new Error('Invalid type: alpha'));
  });

  describe(`type ${incrementorType.INTEGER}`, () => {
    test(`should return error when options.type is ${incrementorType.INTEGER} but the value passed in is not a number`, () => {
      const { error, value } = increment({ type: incrementorType.INTEGER }, '3');
      expect(value).toBeNull();
      expect(error).toEqual(new Error(`Value with options.type '${incrementorType.INTEGER}' must be of type 'number'`));
    });

    test(`should increment value by 1 when type is ${incrementorType.INTEGER}`, () => {
      const { error, value } = increment({ type: 'integer' }, 3);
      expect(error).toBeNull();
      expect(value).toBe(4);
    });
  });

  describe(`type ${incrementorType.NUMERIC}`, () => {
    test('should return an error when value passed in is not a numeric string', () => {
      const { error, value } = increment({ type: incrementorType.NUMERIC }, 'abc');
      expect(value).toBeNull();
      expect(error).toEqual(new Error('Value needs to be a numeric value represented as a string'));
    });

    test('should increment the value by 1 with no left padding', () => {
      const { error, value } = increment({ type: incrementorType.NUMERIC }, '23');
      expect(error).toBeNull();
      expect(value).toBe('24');
    });

    test('should increment the value by 1 and add the left padding is greater than the value length', () => {
      const options = {
        type: incrementorType.NUMERIC,
        leftPadding: 4,
      };

      const { error, value } = increment(options, '23');
      expect(error).toBeNull();
      expect(value).toBe('0024');
    });

    test('should increment the value by 1 and add the left padding length when the value has 0 as it\'s padding', () => {
      // NOTE: this test is true because the code will strip the value to 23, increment and
      //       then add the leftPadding.  In the future, a flag could be passed in to preserve
      //       the original padding if that's a feature openly requested.
      const options = {
        type: incrementorType.NUMERIC,
        leftPadding: 4,
      };

      const { error, value } = increment(options, '00023');
      expect(error).toBeNull();
      expect(value).toBe('0024');
    });

    test('should increment the value by 1 and not add the leftPadding if the value length is greater than the leftPadding value', () => {
      const options = {
        type: incrementorType.NUMERIC,
        leftPadding: 4,
      };

      const { error, value } = increment(options, '11123');
      expect(error).toBeNull();
      expect(value).toBe('11124');
    });
  });
});
