import { Vector, addVector } from "./vector";

export class Ball {
  private x: number;
  private y: number;
  private vector: Vector;

  constructor(x: number, y: number, vector: Vector) {
    this.x = x;
    this.y = y;
    this.vector = vector;
  }

  getPos(): Vector {
    return {x: this.x, y: this.y};
  }

  getDirection(): Vector {
    return this.vector;
  }

  moveBall(): void {
    let movedPos: Vector = addVector(this.x, this.y, this.vector);
    this.x = movedPos.x;
    this.y = movedPos.y;
  }
}