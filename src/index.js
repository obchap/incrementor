
const incrementorType = {
  INTEGER: 'integer',
  NUMERIC: 'numeric',
};

function Incrementor({
  type = incrementorType.INTEGER,
  leftPadAmount = 0,
}) {
  if (type !== incrementorType.INTEGER || type !== incrementorType.NUMERIC) {
    this.error = new Error(`Invalid type: ${type}`);
  } else {
    this.error = null;
  }

  this.type = type;
  this.leftPadAmount = leftPadAmount;
}

Incrementor.prototype.increment = function increment(value) {
  if (this.type === incrementorType.INTEGER) {
    return {
      value: value + 1,
      error: null,
    };
  }

  if (this.type === incrementorType.NUMERIC) {
    const num = Number.parseInt(value, 10);

    const incremented = `${num + 1}`;

    if (this.leftPadAmount > 0) {
      if (incremented.length < this.leftPadAmount) {
        const diff = this.leftPadAmount - incremented.length + 1;
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
  }

  return {
    value: null,
    error: new Error(`Unsupported type: ${this.type}`),
  };
};

module.exports = Incrementor;
