import { HashMap } from "../../data-structures/HashMap/HashMap.mjs";
// Chapter 1 | Arrays and Strings
// Given two strings, write a method to determine if one is a permutation of the other

// idea 1 :
// - for char in s1 add key and increment with any additional addition
// - for char in s2 decrement
// - if there are any keys there are not 0, return false else the strings are permutation

// O(s1 + s2 + u)
// U stands for the amount of unique characters, in the alphabet for example: its 26

const checkPermutations = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let chars = new HashMap();

  for (let i = 0; i < s1.length; i++) {
    chars.set(s1.charAt(i), (chars.get(s1.charAt(i)) ?? 0) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
    chars.set(s2.charAt(i), (chars.get(s2.charAt(i)) ?? 0) - 1);
  }
  for (const value of chars.values()) {
    if (value !== 0) return false;
  }

  return true;
};

console.time("algo");
console.log(checkPermutations("aaacc", "aaacd"));
console.log(checkPermutations("aaacc", "caaac"));
console.log(checkPermutations("", "caaac"));
console.log(checkPermutations("!@!", "!!@"));
console.timeEnd("algo");
