import { LinkedList } from "../../data-structures/LinkedList/LinkedList.mjs";

// Chapter 2 | Linked Lists
// Remove duplicates from singly linked list
// loop
// map values
// if values already exits connect to next node

// O(n)

LinkedList.prototype.removeDups = function () {
  let map = new Map();

  map.set(this.head.value, 1);

  for (let n = this.head; n && n.next; n = n.next) {
    let value = n.next.value;
    map.set(value, 1);

    if (map.get(value)) {
      n.next = n.next.next;
    }
  }
};

let test = () => {
  let list = new LinkedList();
  list.append(1);
  list.append(1);
  list.append(2);
  list.append(2);
  console.log(list.toString());
  list.removeDups();
  console.log(list.toString());
};

test();
