function removeExclamationMarks(str: string): string {
  return str.replace(/!/g, '') + '!';
}

console.log(removeExclamationMarks('Hi!'));
console.log(removeExclamationMarks('Hi!!!'));
console.log(removeExclamationMarks('!Hi'));
console.log(removeExclamationMarks('!Hi!'));
console.log(removeExclamationMarks('Hi! Hi!'));
console.log(removeExclamationMarks('Hi'));
