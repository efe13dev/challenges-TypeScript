const reverse = (str: string): string => {
  return str.split('').reverse().join('');
};

console.log(reverse('hello'));
