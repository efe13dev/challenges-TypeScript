String.prototype.toJadenCase = function (this: string): string {
  const words: string[] = this.split(' ');
  const capitalizedWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const jadenCaseString = capitalizedWords.join(' ');
  return jadenCaseString;
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
