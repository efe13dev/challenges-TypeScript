export function usdToCny(usd: number): string {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
