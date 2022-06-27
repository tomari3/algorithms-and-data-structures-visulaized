// Chapter 1 | Arrays and Strings
// replace spaces in a string with "%20"

// idea 1 :
// loop strings until end of word
// start count until start of word
// splice from i-count and replace with "%20"
// decrement i by count - 3
// reset count

// O(2n) -> O(n)

const URLify = (s) => {
  if (!s.length) return s;
  s = s.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(s);
    if (s[i].charCodeAt(0) === 32) {
      while (s[i + count].charCodeAt(0) === 32) {
        count++;
      }
      s.splice(i + 1 - count, count, "%20");
      i -= count - 3;
      count = 0;
    }
  }
  return s.join("");
};

// console.time("algo");
// console.log(URLify("one two three"));
// console.timeEnd("algo");

// idea 2:
// the js way

// O(2n) -> O(n)

const URLifySplit = (s) => {
  if (!s.length) return s;
  return s.split(" ").join("$20");
};

console.time("algo");
console.log(URLifySplit("one two three"));
console.timeEnd("algo");
