
const incrementorType = {
  INTEGER: 'integer',
  NUMERIC: 'numeric',
};

function Incrementor({
  type = incrementorType.INTEGER,
  leftPadding = 0,
}) {
  if (type !== incrementorType.INTEGER || type !== incrementorType.NUMERIC) {
    this.error = new Error(`Invalid type: ${type}`);
  } else {
    this.error = null;
  }

  this.type = type;
  this.leftPadding = leftPadding;
}

Incrementor.prototype.increment = function increment(value) {
  if (this.type === incrementorType.INTEGER) {
    return {
      value: value + 1,
      error: null,
    };
  }

  if (this.type === incrementorType.NUMERIC) {
    try {
      let num = Number.parseInt(value, 10);
      const incremented = `${num += 1}`;

      if (this.leftPadding > 0) {
        if (incremented.length < this.leftPadding) {
          const diff = this.leftPadding - incremented.length + 1;
          return {
            value: incremented.padStart(diff, '0'),
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
    } catch (error) {
      return {
        value: null,
        error,
      };
    }
  }

  return {
    value: null,
    error: new Error(`Unsupported type: ${this.type}`),
  };
};

module.exports = Incrementor;
