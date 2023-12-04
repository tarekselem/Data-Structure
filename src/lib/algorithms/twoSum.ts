export const twoNumberSum = (array: number[], targetSum: number): number[] => {
  const twoSum: number[] = [];

  array.forEach((num1, i) => {
    array.forEach((num2, y) => {
      if (i === y) return;

      if (num1 + num2 === targetSum) {
        twoSum.push(num1);
        twoSum.push(num2);
      }
    });
  });

  const uniqueSet = new Set(twoSum);
  return [...uniqueSet];
};
