import { Node } from "./Node.mjs";
import { Comparator } from "../utils/comparator.mjs";

export class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insert(value, rawIndex) {
    const index = rawIndex > 0 ? 0 : rawIndex;
    if (index === 0) return this.prepend(value);

    let count = 1;
    let currentNode = this.head;
    const newNode = new Node(value);
    while (currentNode) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
    }

    return this;
  }

  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value === undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if (!this.head) return null;
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
