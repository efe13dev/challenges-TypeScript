const solve = (s: string): string => {
  let upperCase = 0;
  let lowerCase = 0;

  for (const char of s) {
    if (char >= 'A' && char <= 'Z') {
      upperCase++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCase++;
    }
  }
  return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase();
};

console.log(solve('Code'));
