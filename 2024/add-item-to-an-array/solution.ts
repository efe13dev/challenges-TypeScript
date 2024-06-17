function webSites(web: string): string[] {
  const webs: string[] = [];
  if (web.length > 0) {
    webs.push(web);
  }
  return webs;
}
console.log(webSites('codeWars'));
