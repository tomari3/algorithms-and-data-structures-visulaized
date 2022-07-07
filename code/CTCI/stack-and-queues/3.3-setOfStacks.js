// Chapter 3 | Stacks and Queues
// implement a stack that create a new stack once a threshold is passed but push and pop still act the same.
// add popAt for popping for specific stack

class setOfStacks {
  constructor(threshold = 1024) {
    this.stacks = [[]];
    this.threshold = threshold;
    this.index = 0;
  }

  push(value) {
    if (this.stacks[this.index].length + 1 > this.threshold) {
      this.index++;
    }
    if (!this.stacks[this.index]) {
      this.stacks[this.index] = [];
    }
    this.stacks[this.index].push(value);
    return value;
  }

  pop() {
    const popped = this.stacks[this.index].pop() || null;
    if (!this.stacks[index]) {
      this.index--;
    }
    return popped;
  }

  popAt(index) {
    const popped = this.stacks[index].pop() || null;
    if (!this.stacks[index]) {
      this.index--;
    }
    return popped;
  }

  toString() {
    let str = "";
    this.stacks.map((stack, i) => {
      str += ` ${i}: `;
      stack.map((n) => {
        str += ` ${n} `;
      });
    });
    return str;
  }
}

let test = () => {
  let stack = new setOfStacks(2);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  stack.push(4);
  stack.popAt(0);
  console.log(stack.toString());
};

test();
