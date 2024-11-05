export class Cube {
  private _side: number;

  constructor(side?: number) {
    this._side = side !== undefined ? Math.abs(side) : 0;
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number): void {
    this._side = Math.abs(value);
  }
}
