// Sample input:
// [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// Sample Output:
// [
//     [1, 3, 5],
//     [2, 4, 6]
// ]

export const transposeMatrix = (matrix: number[][]): number[][] => {
  const transposedMatrix = [];

  matrix.forEach((arr, row) => {
    arr.forEach((num, col) => {
      if (!transposedMatrix[col]) transposedMatrix[col] = [];

      transposedMatrix[col][row] = num;
    });
  });

  return transposedMatrix;
};
