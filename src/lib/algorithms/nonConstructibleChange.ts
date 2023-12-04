// For example, if you're given coins = [1, 2, 5],
// the minimum amount of change that you can't create is 4.
// If you're given no coins, the minimum amount of change that you can't create is 1.

export const nonConstructibleChange = (coins: number[]): number => {
  if (!coins.length) return 1;

  const sortedCoins = coins.sort((a, b) => a - b);
  const minRange = sortedCoins[0];
  const maxRange = coins.reduce((total, curr) => total + curr, 0);

  return 2;
};
