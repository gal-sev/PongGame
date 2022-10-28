import * as app from "./app";
import { Vector } from "./shared/vector";

describe("game start data tests ", () => {
  test("player 1 start position", () => {
    expect(app.game_data.player1.getPos()).toEqual({x: 0, y: app.SCREEN_HEIGHT/2});
  });

  test("player 2 start position", () => {
    expect(app.game_data.player2.getPos()).toEqual({x: app.SCREEN_WIDTH, y: app.SCREEN_HEIGHT/2});
  });
});

describe("player movement test", () => {
  test("player 1 movement y+5", () => {
    app.game_data.player1.movePlayer({x: 0, y: 5}); //move the player in the y axis
    expect(app.game_data.player1.getPos()).toEqual({x: 0, y: (app.SCREEN_HEIGHT/2) + 5});
  });
});

describe("ball start position tests", () => {
  test("ball start position", () => {
    expect(app.game_data.ball.getPos()).toEqual({x: app.SCREEN_WIDTH/2, y: app.SCREEN_HEIGHT/2});
  });
});

describe("ball movement test", () => {
  test("ball movement by direction", () => {
    app.game_data.ball.moveBall(); //move the ball based on its direction vector
    let b_direction: Vector = app.game_data.ball.getDirection();
    expect(app.game_data.ball.getPos()).toEqual({
      x: (app.SCREEN_WIDTH/2) + b_direction.x,
      y: (app.SCREEN_HEIGHT/2) + b_direction.y
    });
  });
});
