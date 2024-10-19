function rot(s: string): string {
  return s
    .split('\n')
    .map((line) => line.split('').reverse().join(''))
    .reverse()
    .join('\n');
}

function selfieAndRot(s: string): string {
  const lines = s.split('\n');
  const dots = '.'.repeat(lines[0].length);
  const selfie = lines.map((line) => line + dots).join('\n');
  const rotated = rot(s)
    .split('\n')
    .map((line) => dots + line)
    .join('\n');
  return selfie + '\n' + rotated;
}

function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}

// Ejemplos de uso:
console.log(oper(rot, 'abcd\nefgh\nijkl\nmnop'));
console.log(oper(selfieAndRot, 'abcd\nefgh\nijkl\nmnop'));
