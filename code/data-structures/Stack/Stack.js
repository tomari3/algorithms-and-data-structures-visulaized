import { LinkedList } from "../LinkedList/LinkedList.mjs";

// Stack
// stack is a data structure that uses LIFO ordering. that is - Last in First out.
// just like a stack of plates
// the must operations are
// pop, push, peek and isEmpty
// O(n) find
// O(1) push/pop
// it can be implemented with linked list or with array

export class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return !this.list.head;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list.head.value;
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    const removedHead = this.list.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toString(cb) {
    return this.list.toString(cb);
  }
}

let test = () => {
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.toString());
};
test();
