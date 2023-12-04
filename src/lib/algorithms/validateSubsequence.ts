export const isValidSubsequence = (
  array: number[],
  sequence: number[]
): boolean => {
  const uniqueArray = [...new Set(array)];
  const uniqueSequence = [...new Set(sequence)];

  // if (array.length === sequence.length) return false;

  return sequence.every((num) => array.includes(num));
};
