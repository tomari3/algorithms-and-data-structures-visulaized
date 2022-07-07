import { LinkedList } from "../../data-structures/LinkedList/LinkedList.mjs";

// Chapter 2 | Linked Lists
// given two linked lists return the sum of the lists in reverse
// (1 -> 5 -> 9) + (4 -> 2 -> 0) = 951 + 420 = 1371 = (1 -> 3 -> 7 -> 1)
// idea 1 :
// traverse lists for each val return val * 10 ** length - 1 -i to relevant counter
// sum the two
// convert to linked list

// O(l1+l2)

const sumLists = (l1, l2) => {
  let i = 0;
  let sum = 0;
  let sumList = new LinkedList();
  let currNode1 = l1.head;
  let currNode2 = l2.head;
  while (currNode1 || currNode2) {
    if (currNode1) {
      sum += currNode1.value * 10 ** i;
      currNode1 = currNode1.next;
    }
    if (currNode2) {
      sum += currNode2.value * 10 ** i;
      currNode2 = currNode2.next;
    }
    i++;
  }

  sum
    .toString()
    .split("")
    .map((n) => sumList.append(n));

  return sumList;
};

let test = () => {
  let l1 = new LinkedList();
  let l2 = new LinkedList();

  l1.append(1);
  l1.append(2);
  l1.append(3);

  l2.append(3);
  l2.append(2);
  l2.append(1);
  l2.append(1);

  console.log(l1.toString());
  console.log(l2.toString());

  let sumList = sumLists(l1, l2);
  console.log(sumList.toString());
};

test();
