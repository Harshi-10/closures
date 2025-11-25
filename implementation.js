function createCounter(initial = 0) {
  // private variable, not accessible from outside
  let count = initial;

  return {
    increment() {
      count += 1;
      console.log("Current count:", count);
      return count;
    },
    decrement() {
      count -= 1;
      console.log("Current count:", count);
      return count;
    },
    getCount() {
      console.log("Current count:", count);
      return count;
    }
  };
}
