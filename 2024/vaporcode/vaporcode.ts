export function vaporcode(sentence: string): string {
  return sentence.toUpperCase().replace(/\s/g, '').split('').join('  ');
}
