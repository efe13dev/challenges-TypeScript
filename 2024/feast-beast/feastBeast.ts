export function feastBeast(beast: string, dish: string): boolean {
  return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length - 1]);
}
