export function numIslands(grid: string[][]): number {
  let totalIslands = 0;

  grid.forEach((row, i) => {
    row.forEach((element, j) => {
      console.log('element:', element, [i, j]);
      console.log('hasSeeAtLeft:', isWaterOnLeft(row, j));
      console.log('hasSeeAtRight:', isWaterOnRight(row, j));
      console.log('hasSeeAtDown:', isWaterOnDown(grid, i, j));
      console.log('hasSeeAtTop:', isWaterOnTop(grid, i, j));

      if (element === '1') {
        if (
          (isWaterOnLeft(row, j) ||
            isWaterOnRight(row, j) ||
            isWaterOnDown(grid, i, j) ||
            isWaterOnTop(grid, i, j)) &&
          !hasIslandAround(grid, i, j)
        ) {
          totalIslands++;
          console.log('totalIslands:', totalIslands);
        }
      }

      console.log('==========');
    });
  });

  return totalIslands;
}

const isWaterOnRight = (row: string[], index: number): boolean => {
  if (index === row.length - 1) return true;
  return row[index + 1] === '0';
};

const isWaterOnLeft = (row: string[], index: number): boolean => {
  if (index === 0) return true;
  return row[index - 1] === '0';
};

const isWaterOnDown = (
  grid: string[][],
  rowIndex: number,
  colIndex: number
): boolean => {
  if (rowIndex === grid.length - 1) return true;
  return grid[rowIndex + 1][colIndex] === '0';
};

const isWaterOnTop = (
  grid: string[][],
  rowIndex: number,
  colIndex: number
): boolean => {
  if (rowIndex === 0) return true;
  return grid[rowIndex - 1][colIndex] === '0';
};

const hasIslandAround = (
  grid: string[][],
  rowIndex: number,
  colIndex: number
): boolean => {
  if (rowIndex === 0 && colIndex === 0) return false;

  return (
    grid[rowIndex + 1][colIndex] === '1' || grid[rowIndex][colIndex + 1] === '1'
  );
};
