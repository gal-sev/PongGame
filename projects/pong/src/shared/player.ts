import { Keys } from "./keys";
import { Vector, addVector } from "./vector";

export class Player { //remove x? dont really need it...
  private x: number;
  private y: number;
  private points: number;
  private up_pressed: boolean;
  private down_pressed: boolean;
  //add a height property to allow for paddle height change?

  constructor(x: number, y: number, points: number) {
    this.x = x;
    this.y = y;
    this.points = points;
    this.up_pressed = false;
    this.down_pressed = false;
  }

  getPos(): Vector {
    return {x: this.x, y: this.y + (0.5 * 104)};
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

  //returns an object with 2 arrays {pos_vector[], direction_vector[]}
  getPaddleParts(isLeftPlayer: boolean): {pos_v: Vector[], dir_v: Vector[]} {
    let vec_arr: {pos_v: Vector[], dir_v: Vector[]} = {pos_v: [], dir_v: []};
    let x_dir: number = isLeftPlayer ? 1 : -1;
    for (let i = 0; i < 7; i++) {
      vec_arr.pos_v.push({x: this.x, y: this.y + (i*13) + 13}); //104(height) / 8(parts) = 13(each part)
      if(i !== 3) {
        vec_arr.dir_v.push({x: Math.abs(-3 + i) * x_dir, y: -3 + i});
      } else {
        vec_arr.dir_v.push({x: 1 * x_dir, y: 0});
      }
      /*if(i == 3) {
        vec_arr.pos_v.push({x: this.x, y: this.y + (i*13)});
        vec_arr.dir_v.push({x: Math.abs(-3 + i) * x_dir, y: -3 + i});
      }*/
    }
    /*
    -3 = -3+0
    -2 = -3+1
    -1 = -3+2
     0 = -3+3
     //0 = -3+3
     1 = -3+4
     2 = -3+5
     3 = -3+6
    */
    return vec_arr;
  }
}