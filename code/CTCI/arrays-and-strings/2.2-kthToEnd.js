import { LinkedList } from "../../data-structures/LinkedList/LinkedList.mjs";
// Chapter 2 | Linked Lists
// return the kth element to end. [1,2,3,4,5,6,7,8]
//                                       ^
//                                   4th to end
// idea 1 :
// map indexes return the value of the last index - kth index

// O(n)

LinkedList.prototype.kthToEnd = function (k) {
  let map = new Map();
  let i = 0;
  for (let n = this.head; n && n.next; n = n.next) {
    map.set(i, n.value);
    i++;
  }
  return map.get(i - k);
};

let test = () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  console.log(list.toString());
  console.log(list.kthToEnd(2));
};

test();
