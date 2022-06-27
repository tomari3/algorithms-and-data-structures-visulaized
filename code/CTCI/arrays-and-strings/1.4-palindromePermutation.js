// Chapter 1 | Arrays and Strings
// given a string check if a palindrome permutation exits and return if so
// idea 1 :
// map letters
// if all letters are even return an equal spread of them (aabbaa)
// allow one letter to be odd (aba)
// ignore spaces

// O(2n) -> O(n)

const palindromePermutation = (s) => {
  s = s.toLowerCase().split("");
  let chars = new Map();
  let once = false;
  let i = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      chars.set(s[i], (chars.get(s[i]) ?? 0) + 1);
    }
  }
  for (const [key, val] of chars) {
    if (val && val % 2 !== 0) {
      if (once) return false;
      once = true;
      s[Math.floor(s.length / 2)] = key;
    } else if (val) {
      s[i] = key;
      s[s.length - 1 - i] = key;
      chars.set(key, val - 2);
    }
    i++;
  }

  return s.join("");
};

console.time("algo");
console.log(palindromePermutation("eoordevr  needvN ")); // Never odd or even
console.log(palindromePermutation("Ddsaw swe i Ilalaiea")); // Delia saw I was ailed
console.log(palindromePermutation("lyaalmaMa")); // Malayalam
console.timeEnd("algo");
