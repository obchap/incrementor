function Incrementor(type = 'num') {
  this.type = type;
};

Incrementor.prototype.increment = function increment(value) {
  if (this.type === 'num') {
    return value += 1;
  }

  return new Error(`Unsupported type: ${this.type}`);
}

module.exports = Incrementor;