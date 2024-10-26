function leo(oscar: number): string {
  if (oscar === 88) {
    return 'Leo finally won the oscar! Leo is happy';
  }
  if (oscar === 86) {
    return 'Not even for Wolf of wallstreet?!';
  }
  if (oscar < 88) {
    return 'When will you give Leo an Oscar?';
  }
  return 'Leo got one already!';
}

console.log(leo(88));
console.log(leo(86));
console.log(leo(85));
console.log(leo(87));
