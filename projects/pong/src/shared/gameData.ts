import { Player } from "./player";
import { Ball } from "./ball";
import { Vector } from "./vector";

export class GameData {
  player1: Player;
  player2: Player;
  ball: Ball;
  
  constructor(player1_x: number, player2_x: number, players_y: number, ball_x: number, ball_y: number, ball_v: Vector) {
    this.player1 = new Player(player1_x, players_y, 0);
    this.player2 = new Player(player2_x, players_y, 0);
    this.ball = new Ball(ball_x, ball_y, ball_v);
  }

}
