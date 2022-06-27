// Chapter 1 | Arrays and Strings
// given a matrix of N*N pixels where each pixel is 4bytes, rotate the array 90 degrees
// idea 1 :
// swap the edges of the outer layer and go inwards with each repetition
// [i][i] = [i][n-i] = [n-i][i] = [n-i][n-i]

// O(n) O(1)

const matrixRotation = (m) => {
  const n = m.length;

  for (let layer = 0; layer < n / 2; layer++) {
    for (let offset = 0; offset < n - 2 * layer - 1; offset++) {
      [m[layer][layer + offset], m[n - 1 - layer - offset][layer]] = [
        m[n - 1 - layer - offset][layer],
        m[layer][layer + offset],
      ]; // top - left
      [
        m[n - 1 - layer - offset][layer],
        m[n - 1 - layer][n - 1 - layer - offset],
      ] = [
        m[n - 1 - layer][n - 1 - layer - offset],
        m[n - 1 - layer - offset][layer],
      ]; // left - bottom
      [
        m[n - 1 - layer][n - 1 - layer - offset],
        m[layer + offset][n - 1 - layer],
      ] = [
        m[layer + offset][n - 1 - layer],
        m[n - 1 - layer][n - 1 - layer - offset],
      ]; // bottom - right
    }
  }
  return m;
};

console.time("matrixRotation");
console.log(
  matrixRotation([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  matrixRotation([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
console.timeEnd("matrixRotation");
