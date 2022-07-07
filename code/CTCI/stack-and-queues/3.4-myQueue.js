import { Stack } from "../../data-structures/Stack/Stack.js";
// Chapter 3 | Stacks and Queues
// Implement "myQueue" using two stacks
// idea 1 :
// have a stack for push
// hav a stack that reverse the previous stack and pop its top
// s1[1,2,3,4] -> s2[4,3,2,1].pop() -> 1
// First in First out

class MyQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  add(value) {
    this.inStack.push(value);
  }

  remove() {
    if (!this.outStack.peek()) {
      while (this.inStack.peek()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}

let test = () => {
  let queue = new MyQueue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  queue.add(4);
  console.log("removed: ", queue.remove());
};

test();
