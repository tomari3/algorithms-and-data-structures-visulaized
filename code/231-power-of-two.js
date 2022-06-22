export const isPowerOfTwoRecursive = (n) => {
  if (n - 1 < 0) return false;
  return n === 0 || n === 1 ? true : isPowerOfTwoRecursive(n / 2);
};
