import { GameData } from './shared/gameData';
import { Keys } from './shared/keys';
import { Vector } from './shared/vector';

export const SCREEN_WIDTH: number = window.innerWidth; //forTest: REMOVE EXPORT LATER
export const SCREEN_HEIGHT: number = window.innerHeight; //forTest: REMOVE EXPORT LATER

export const game_data = new GameData(
  0, SCREEN_WIDTH, SCREEN_HEIGHT/2, //player
  (SCREEN_WIDTH/2), (SCREEN_HEIGHT/2), {x: 1, y: 0} //ball
);

window.addEventListener('load', mainFunc);

function mainFunc(): void {
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  setInterval(gameLoop, 5);
}

function onKeyDown(e: any): void {
  //87-w, 83-s, 38-arrowUp, 40-arrowDown
  if(e.keyCode === Keys.UP_P1) {
    game_data.player1.pressKey(Keys.UP_P1);
  }
  if(e.keyCode == Keys.DOWN_P1) {
    game_data.player1.pressKey(Keys.DOWN_P1);
  }
  if(e.keyCode === Keys.UP_P2) {
    game_data.player2.pressKey(Keys.UP_P2);
  }
  if(e.keyCode == Keys.DOWN_P2) {
    game_data.player2.pressKey(Keys.DOWN_P2);
  }
  
}

function onKeyUp(e: any): void {
  if(e.keyCode === Keys.UP_P1) {
    game_data.player1.releaseKey(Keys.UP_P1);
  }
  if(e.keyCode == Keys.DOWN_P1) {
    game_data.player1.releaseKey(Keys.DOWN_P1);
  }
  if(e.keyCode === Keys.UP_P2) {
    game_data.player2.releaseKey(Keys.UP_P2);
  }
  if(e.keyCode == Keys.DOWN_P2) {
    game_data.player2.releaseKey(Keys.DOWN_P2);
  }
}

//TODO: move to another class?
function gameLoop(): void {
  game_data.moveEntities(SCREEN_WIDTH, SCREEN_HEIGHT);
  updateElements();
}

//TODO: move later to another class?
function updateElements(): void {
  let p1_div = document.getElementById("p1") as HTMLDivElement;
  let p2_div = document.getElementById("p2") as HTMLDivElement;
  let ball_div = document.getElementById("ball") as HTMLDivElement;
  let p1_score = document.getElementById("p1Score") as HTMLHeadingElement;
  let p2_score = document.getElementById("p2Score") as HTMLHeadingElement;
  let p1_pos: Vector = game_data.player1.getPos();
  let p2_pos: Vector = game_data.player2.getPos();
  let ball_pos: Vector = game_data.ball.getPos();

  p1_div.style.top = p1_pos.y + 'px';
  p2_div.style.top = p2_pos.y + 'px';
  ball_div.style.top = ball_pos.y + 'px';
  ball_div.style.left = ball_pos.x + 'px';
  
  p1_score.innerText = String(game_data.player1.getPoints());
  p2_score.innerText = String(game_data.player2.getPoints());

}
