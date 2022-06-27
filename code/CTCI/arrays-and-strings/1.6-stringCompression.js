// Chapter 1 | Arrays and Strings
// compress a string to char,char occurrences | "aaabbb" -> "a3b3" only return if shorter then original string
// idea 1 :
// map string
// compare lengths
// return shorter

// O(2n) -> O(n)
// doesn't consider order

const stringCompression = (s) => {
  let comp = new Map();
  let compString = "";

  for (let i = 0; i < s.length; i++) {
    comp.set(s.charAt(i), (comp.get(s.charAt(i)) ?? 0) + 1);
  }

  for (const [key, val] of comp) {
    compString += `${key}${val}`;
  }
  return s.length > compString.length ? compString : s;
};

// console.time("stringCompression");
// console.log(stringCompression("aaabbb"));
// console.log(stringCompression(""));
// console.log(stringCompression("abcde"));
// console.log(stringCompression("aaaaaaaaaaaaaeeeeeeeeeepppps"));
// console.timeEnd("stringCompression");

// idea 2:
// start count
// print count + last digit when next digit is not the same
// compare and return

// O(n)

const stringCompressionOrder = (s) => {
  if (s.length === 0) return s;
  let compString = "";
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
      counter++;
    } else {
      compString += `${s.charAt(i)}${counter}`;
      counter = 1;
    }
  }

  return s.length > compString.length ? compString : s;
};

console.time("stringCompressionOrder");
console.log(stringCompressionOrder("aaabbb"));
console.log(stringCompressionOrder(""));
console.log(stringCompressionOrder("abcde"));
console.log(stringCompressionOrder("aaaaaaaaaaaaaeeeeeeeeeepppps"));
console.timeEnd("stringCompressionOrder");
