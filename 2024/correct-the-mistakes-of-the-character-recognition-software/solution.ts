const correct = (s: string): string => {
  const arrayString = s.split('');
  const result = arrayString.map((char) => {
    switch (char) {
      case '0':
        return 'O';

      case '5':
        return 'S';

      case '1':
        return 'I';

      default:
        return char;
    }
  });
  return result.join('');
};
console.log(correct('51NGAP0RE'));
