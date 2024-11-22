export function vowelHarmony(s: string): string {
    return s
        .split('')
        .map((char) => {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                return char.toUpperCase();
            }
            return char;
        })
        .join('');
}