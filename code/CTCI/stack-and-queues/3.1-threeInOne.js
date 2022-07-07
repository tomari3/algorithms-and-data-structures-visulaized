// Chapter 3 | Stacks and queues
// Implement three stacks in one array
// approach 1 :
// give each element an index based on int stack index
// set pointers to each stack top

class kStacksIndexes {
  constructor(k) {
    this.stacks = [];
    this.tops = new Array(k).fill(-1);
  }
  push(stack, value) {
    if (stack > this.k) return;
    this.stacks.push(value);
    this.tops[stack] += 1;
  }
  pop(stack) {
    this.stacks.splice();
  }
}
