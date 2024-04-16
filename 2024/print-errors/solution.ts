function printerError(s:string):string {
 const errorCount: number = s.split('').filter(char => char > 'm').length;
 return `${errorCount}/${s.length}`   
}

console.log(printerError("aaabbbbhaijjjm"));
