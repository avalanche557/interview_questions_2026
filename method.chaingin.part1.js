// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);
// 20


const calculator = {
  total: 0,
  add: function(value) {
    this.total = this.total+value
    return this
  },
  subtract: function(value) {
    this.total = this.total - value
    return this
  },
  divide: function(value) {
    this.total = this.total / value
    return this
  },
  multiply: function(value) {
    this.total = this.total * value
    return this
  }
}

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);