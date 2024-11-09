export function replaceAlphabet(text: string): string {
  return text
    .split('')
    .filter((char) => /[a-zA-Z]/.test(char))
    .map((char) => {
      const code = char.charCodeAt(0);
      return (code >= 97 ? code - 96 : code - 64) + ' ';
    })
    .join('')
    .trim();
}
