function vertMirror(s: string): string {
  return s
    .split('\n')
    .map((line) => line.split('').reverse().join(''))
    .join('\n');
}

function horMirror(s: string): string {
  return s.split('\n').reverse().join('\n');
}

function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}

// Ejemplo de uso:
//const s = 'abcd\nefgh\nijkl\nmnop';
const s = 'lVHt\nJVhv\nCSbg\nyeCt';

console.log(oper(vertMirror, s));

console.log(oper(horMirror, s));
