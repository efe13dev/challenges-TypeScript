export function tankvol(h: number, d: number, vt: number): number {
  const r = d / 2;
  const theta = Math.acos((r - h) / r);
  const segmentArea = r * r * (theta - Math.sin(theta) * Math.cos(theta));
  const filledVolume = (segmentArea * vt) / (Math.PI * r * r);
  return Math.floor(filledVolume);
}
