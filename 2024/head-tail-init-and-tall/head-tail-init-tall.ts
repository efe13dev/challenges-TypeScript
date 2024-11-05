export function head(arr: number[]): number {
  return arr[0];
}

export function tail(arr: number[]): number[] {
  return arr.slice(1);
}

export function init(arr: number[]): number[] {
  return arr.slice(0, -1);
}

export function tall(arr: number[]): number {
  return arr[arr.length - 1];
}
