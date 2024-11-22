export function vowelHarmony(word: string): string {
  return /[aáoóuú]/.test(word.match(/[eéiíöőüűaáoóuú]/g)?.reverse()[0] ?? '')
    ? word + 'nak'
    : word + 'nek';
}
