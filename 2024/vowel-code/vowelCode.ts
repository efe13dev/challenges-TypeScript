export function encode(str: string): string {
  return str.replace(/[aeiou]/g, (char) =>
    char === 'a'
      ? '1'
      : char === 'e'
      ? '2'
      : char === 'i'
      ? '3'
      : char === 'o'
      ? '4'
      : '5'
  );
}

export function decode(str: string): string {
  return str.replace(/[1-5]/g, (char) =>
    char === '1'
      ? 'a'
      : char === '2'
      ? 'e'
      : char === '3'
      ? 'i'
      : char === '4'
      ? 'o'
      : 'u'
  );
}
