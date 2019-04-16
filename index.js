function Incrementor({ type = 'integer' }) {
  if (type !== 'integer') {
    this.error = new Error(`Invalid type: ${type}`);
  } else {
    this.error = null;
  }

  this.type = type;
};

Incrementor.prototype.increment = function increment(value) {
  if (this.type === 'integer') {
    return {
      value: value += 1,
      error: null,
    };
  }

  return {
    value: null,
    error: new Error(`Unsupported type: ${this.type}`),
  };
}

module.exports = Incrementor;