// Chapter 1 | Arrays and Strings
// Check if two strings are one operation (replace, add, remove) from being the same
// idea : 1
// set longest as as s1
// declare var diff
// compare letters by index
// if diff return false
// when mismatch mark diff true
// if lengths aren't the same skip letter on s1 and return letter on s2

// O(n)

const oneAway = (s1, s2) => {
  if (s1.length < s2.length) [s1, s2] = [s2, s1];
  let diff = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i] && s2[1]) {
      if (diff) return false;
      if (s1.length > s2.length) {
        s1.slice(i, 1);
        i--;
      }
      diff = true;
    }
  }
  return true;
};

console.time("algo");
console.log(oneAway("string", "strong"));
console.log(oneAway("strings", "strong"));
console.log(oneAway("lame", "game"));
console.log(oneAway("s", ""));
console.timeEnd("algo");
