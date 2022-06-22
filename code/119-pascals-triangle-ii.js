export const pascalsTriangleGetRow = (rowIndex) => {
  let pascal = new Array(rowIndex + 1);
  pascal[0] = pascal[rowIndex] = 1;

  // loop only inside the inner triangle
  for (let i = 1; i <= rowIndex; i += 1) {
    pascal[i] = (pascal[i - 1] * (rowIndex - i + 1)) / i;
  }

  return pascal;
};
