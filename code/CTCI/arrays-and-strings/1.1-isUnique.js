// Chapter 1 | Arrays and Strings
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// "abc" true
// "abca" false

// idea 1 :
// - keep track of seen chars
// - check seen chars with each char
// - return false if char seen

// O(n^2)

const isUnique = (s) => {
  let seen = [];
  for (let i = 0; i < s.length; i++) {
    for (c of seen) {
      if (c === s.charAt(i)) return false;
    }
    seen.push(s.charAt(i));
  }
  return true;
};

// console.time("algo");
// console.log(isUnique("abc"));
// console.log(isUnique("abca"));
// console.log(isUnique(""));
// console.log(isUnique("@@"));
// console.timeEnd("algo");

// --------------------------------

// idea 2 :
// - keep track of seen chars but store true/false by index of chars code

// O(n)

const isUniqueByIndex = (s) => {
  let seen = [];
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i) - 65;
    if (seen[code]) return false;
    seen[code] = true;
  }
  return true;
};
// console.time("algo");
// console.log(isUniqueByIndex("abc"));
// console.log(isUniqueByIndex("abca"));
// console.log(isUniqueByIndex(""));
// console.log(isUniqueByIndex("@@"));
// console.timeEnd("algo");
