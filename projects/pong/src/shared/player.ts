import { Vector, addVector } from "./vector";

export class Player { //remove x? dont really need it...
  private x: number;
  private y: number;
  private points: number;

  constructor(x: number, y: number, points: number) {
    this.x = x;
    this.y = y;
    this.points = points;
  }

  getPos(): Vector {
    return {x: this.x, y: this.y};
  }

  movePlayer(moveVector: Vector): void {
    let movedPos: Vector = addVector(this.x, this.y, moveVector);
    this.x = movedPos.x;
    this.y = movedPos.y;
  }

  getPoints(): number {
    return this.points;
  }

  addPoint(): void {
    this.points++;
  }
}