function htmlSpecialChars(formData: string): string {
  return formData
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

console.log(htmlSpecialChars('Hello, how would you & I fare?'));
