export function isDigit(str: string): boolean {
  return str.length === 1 && /^[0-9]$/.test(str);
}
