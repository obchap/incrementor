function Incrementor() { };

Incrementor.prototype.increment = function increment(value) {
  return value += 1;
}

module.exports = Incrementor;