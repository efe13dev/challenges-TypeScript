function DNAtoRNA(dna: string): string {
  return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA('GCAT'));
