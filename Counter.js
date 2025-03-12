const counter = {
  count: 0,
  step: 2,
  increment: function() {
    this.count += this.step;
    return this.count;
  }
};

// Call increment and print result each time
console.log(counter.increment()); // 👉 2
console.log(counter.increment()); // 👉 4
console.log(counter.increment()); // 👉 6
