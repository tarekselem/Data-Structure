// competitions = [
//     ["HTML", "C#"],
//     ["C#","Python"],
//     ["Python", "HTML"]
//]
//     results = [0, 0, 1]
// OUTPUT = 'Python'
export const tournamentWinner = (
  competitions: string[][],
  results: number[]
): string => {
  let ranks = new Map<string, number>();

  competitions.forEach((compet, i) => {
    const [home, away] = compet;
    const winner = results[i] === 0 ? away : home;

    const winnerRank = ranks.get(winner);
    ranks.set(winner, (winnerRank ?? 0) + 1);
  });

  // Sort Map
  const sortedRanksArray = [...ranks.entries()].sort((a, b) => b[1] - a[1]);
  return sortedRanksArray[0][0];
};
