// Chapter 1 | Arrays and Strings
// if a point in the matrix is 0 convert the whole i and column to 0's as well
// idea 1 :
// nested loop look for 0
// when found loop row and column convert to 0

// O(h*w + w+h)

const zeroMatrix = (m) => {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == 0) {
        return convertZeros(m, i, j);
      }
    }
  }
  return "no zeros";
};

const convertZeros = (m, row, column) => {
  for (let i = 0; i < m.length; i++) {
    m[row][i] = 0;
    m[row + i][column] = 0;
  }
  return m;
};

console.time("zeroMatrix");
console.log(
  zeroMatrix([
    [1, 2, 3, 0, 4],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
console.timeEnd("zeroMatrix");
