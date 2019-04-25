
const incrementorType = {
  INTEGER: 'integer',
};

/** Increment the given value
 *
 * @param {object} options - the options used by the incrementor
 * @param {incrementorType} options.type - what type of object is being incremented
 * @param {string | number} value - the value to be incremented
 * @returns {object} results
 * @returns {Error} results.value - incremented value passed in
 * @returns {Error} results.error - error while trying to increment the value
 */
const increment = ({ type }, value) => {
  const validType = Object.keys(incrementorType).find(key => incrementorType[key] === type);
  if (!validType) {
    return {
      value: null,
      error: new Error(`Invalid type: ${type}`),
    };
  }

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
};

module.exports = {
  increment,
};
