function goals(
  laLigaGoals: number,
  copaDelReyGoals: number,
  championsLeagueGoals: number
): number {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(5, 10, 2));
