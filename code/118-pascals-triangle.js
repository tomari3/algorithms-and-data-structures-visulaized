export const pascalsTriangle = (numRows) => {
  let pascal = [];

  for (let i = 0; i < numRows; i += 1) {
    pascal[i] = [];
    pascal[i][0] = 1;

    for (let j = 1; j < i; j += 1) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }

    pascal[i][i] = 1;
  }
  return pascal;
};
