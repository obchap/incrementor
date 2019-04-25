const { incrementorType } = require('./enums');

/** Increment the given value
 *
 * @param {object} options - the options used by the incrementor
 * @param {incrementorType} options.type - what type of object is being incremented
 * @param {number} options.leftPadding - set the amount of padding to the left of a numeric value
 * @param {string | number} value - the value to be incremented
 * @returns {object} results
 * @returns {string | number} results.value - incremented value passed in
 * @returns {Error} results.error - error while trying to increment the value
 */
const increment = ({ type, leftPadding }, value) => {
  if (type === incrementorType.INTEGER) {
    if (typeof value !== 'number') {
      return {
        value: null,
        error: new Error('Value with options.type \'integer\' must be of type \'number\''),
      };
    }

    return {
      value: value + 1,
      error: null,
    };
  }

  if (type === incrementorType.NUMERIC) {
    const num = Number.parseInt(value, 10);

    if (Number.isNaN(num)) {
      return {
        value: null,
        error: new Error('Value needs to be a numeric value represented as a string'),
      };
    }


    const incremented = `${num + 1}`;

    if (leftPadding > 0) {
      if (incremented.length < leftPadding) {
        return {
          value: incremented.padStart(leftPadding, '0'),
          error: null,
        };
      }

      return {
        value: incremented,
        error: null,
      };
    }

    return {
      value: incremented,
      error: null,
    };
  }

  return {
    value: null,
    error: new Error(`Invalid type: ${type}`),
  };
};

module.exports = {
  increment,
};
