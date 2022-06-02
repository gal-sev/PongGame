import { GameData } from './shared/gameData';

export const SCREEN_WIDTH: number = window.innerWidth; //forTest: REMOVE EXPORT LATER
export const SCREEN_HEIGHT: number = window.innerHeight; //forTest: REMOVE EXPORT LATER


export const game_data = new GameData(
  0, SCREEN_WIDTH, SCREEN_HEIGHT/2, //player
  (SCREEN_WIDTH/2), (SCREEN_HEIGHT/2), {x: 1, y: 0} //ball
  );
