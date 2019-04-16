function Incrementor(type = 'num') {
  if (type !== 'num') {
    this.error = new Error(`Invalid type: ${type}`);
  } else {
    this.error = null;
  }
  
  this.type = type;
};

Incrementor.prototype.increment = function increment(value) {
  if (this.type === 'num') {
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