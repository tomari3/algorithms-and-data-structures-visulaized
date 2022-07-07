// Chapter 1 | Stacks and Queues
// design a stack with O(1) min operation
// idea : 1
// set min var in stack
// on each insert check if the inserted in min
// replace / keep

class minStack {
  constructor() {
    this.stack = [];
    this.min = { value: Number.MAX_SAFE_INTEGER, index: -1 };
  }

  push(value) {
    if (value < this.min.value)
      this.min = {
        value: value,
        index: this.stack.length,
      };
    return this.stack.push(value);
  }

  pop() {
    const popped = this.stack.pop();
    if (popped < this.min.value) {
      let [min, minIndex] = [Number.MAX_SAFE_INTEGER, -1];
      for (let i = 0; i < this.stack.length; i++) {
        if (this.stack[i] < min) {
          min = this.stack[i];
          minIndex = i;
        }
      }

      this.min = { value: min, index: minIndex };
    }
    return popped;
  }

  isEmpty() {
    return !!this.stack.length;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min.value;
  }
}
