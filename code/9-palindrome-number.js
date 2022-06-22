export const isPalindrome = (x) => {
  if (x.length === 1) return true;
  if (x < 0) return false;

  const array = Array.from(String(x), Number);

  while (array.length > 1) {
    const startNum = array.shift();
    const endNum = array.pop();

    if (startNum !== endNum) return false;
  }
  return true;
};
