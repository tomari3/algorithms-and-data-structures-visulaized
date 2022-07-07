import { LinkedList } from "../LinkedList/LinkedList.mjs";

export class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.head;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list.head.value;
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    const removedHead = this.list.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toString(cb) {
    return this.list.toString(cb);
  }
}
