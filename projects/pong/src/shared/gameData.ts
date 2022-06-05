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

  moveEntities(SCREEN_WIDTH: number, SCREEN_HEIGHT: number): void {
    let p1_vec: Vector = {x: 0, y: 0};
    let p2_vec: Vector = {x: 0, y: 0};

    if(this.player1.isUpPressed() && this.player1.getPos().y >= 80) {
      p1_vec.y = p1_vec.y -5;
    }
    if(this.player1.isDownPressed() && this.player1.getPos().y <= SCREEN_HEIGHT - 80) {
      p1_vec.y = p1_vec.y + 5;
    }
    if(this.player2.isUpPressed() && this.player2.getPos().y >= 80) {
      p2_vec.y = p2_vec.y - 5;
    }
    if(this.player2.isDownPressed() && this.player2.getPos().y <= SCREEN_HEIGHT - 80) {
      p2_vec.y = p2_vec.y + 5;
    }
        
    this.player1.movePlayer(p1_vec);
    this.player2.movePlayer(p2_vec);

    let middle_div = document.getElementById("divLine") as HTMLDivElement;
    if(this.collisionEvent(SCREEN_HEIGHT, SCREEN_WIDTH)) {
      middle_div.style.borderColor = "white";
    } else {
      middle_div.style.borderColor = "grey";
    }

    this.ball.moveBall();

    if(this.ball.getPos().x >= SCREEN_WIDTH) {
      this.goalEvent(false, SCREEN_WIDTH, SCREEN_HEIGHT);
    } else if(this.ball.getPos().x <= 0) {
      this.goalEvent(true, SCREEN_WIDTH, SCREEN_HEIGHT);
    }
  }

  goalEvent(isLeftGoalHit: boolean, SCREEN_WIDTH: number, SCREEN_HEIGHT: number): void {
    if(isLeftGoalHit) {
      this.player2.addPoint();
      this.ball.setPos(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
      this.ball.setVector({x: -3, y: 0});
    } else {
      this.player1.addPoint();
      this.ball.setPos(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
      this.ball.setVector({x: 3, y: 0});
    }
  }

  collisionEvent(SCREEN_HEIGHT: number, SCREEN_WIDTH: number): boolean {
    let p1_parts: {pos_v: Vector[], dir_v: Vector[]} = this.player1.getPaddleParts(true);
    let p2_parts: {pos_v: Vector[], dir_v: Vector[]} = this.player2.getPaddleParts(false);
    let new_ball_vec: Vector = {x:0, y:0};
    let ball_pos: Vector = this.ball.getPos();
    
    //paddle collision:
    if(ball_pos.x <= p1_parts.pos_v[0].x+30 &&
    ball_pos.y >= p1_parts.pos_v[0].y-20 && 
    ball_pos.y <= p1_parts.pos_v[p1_parts.pos_v.length-1].y+20) {
      for (let i = 0; i < p1_parts.pos_v.length; i++) {
        if(ball_pos.y >= p1_parts.pos_v[i].y-20) {
          new_ball_vec = p1_parts.dir_v[i];
        } else {
          break;
        }
      }
      this.ball.setVector(new_ball_vec);  
    }
    if(ball_pos.x >= p2_parts.pos_v[0].x-70 &&
    ball_pos.y >= p2_parts.pos_v[0].y-20 && 
    ball_pos.y <= p2_parts.pos_v[p2_parts.pos_v.length-1].y+20) {
      for (let i = 0; i < p2_parts.pos_v.length; i++) {
        if(ball_pos.y >= p2_parts.pos_v[i].y-20) {
          new_ball_vec = p2_parts.dir_v[i];
        } else {
          break;
        }
      }
      this.ball.setVector(new_ball_vec);
    }
    if(ball_pos.y <= 0 || ball_pos.y >= SCREEN_HEIGHT) {
      let current_dir_vec: Vector = this.ball.getDirection();
      this.ball.setVector({x: current_dir_vec.x, y: current_dir_vec.y * -1});
    }

    if(ball_pos.x >= (SCREEN_WIDTH/2) - 140 && ball_pos.x <= (SCREEN_WIDTH/2) + 100) {
      return true;
    } else {
      return false;
    }
  }

}
