import { Keys } from "./keys";
import { Vector, addVector } from "./vector";

export class Player { //remove x? dont really need it...
  private x: number;
  private y: number;
  private points: number;
  private up_pressed: boolean;
  private down_pressed: boolean;

  constructor(x: number, y: number, points: number) {
    this.x = x;
    this.y = y;
    this.points = points;
    this.up_pressed = false;
    this.down_pressed = false;
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

  isUpPressed(): boolean {
    return this.up_pressed;
  }

  isDownPressed(): boolean {
    return this.down_pressed;
  }

  pressKey(keyPressed: Keys): void {
    if(keyPressed === Keys.UP_P1 || keyPressed === Keys.UP_P2) {
      this.up_pressed = true;
    } else if(keyPressed === Keys.DOWN_P1 || keyPressed === Keys.DOWN_P2) {
      this.down_pressed = true;
    }
  }

  releaseKey(keyPressed: Keys): void {
    if(keyPressed === Keys.UP_P1 || keyPressed === Keys.UP_P2) {
      this.up_pressed = false;
    } else if(keyPressed === Keys.DOWN_P1 || keyPressed === Keys.DOWN_P2) {
      this.down_pressed = false;
    }
  }
}