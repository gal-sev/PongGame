"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game_data = exports.SCREEN_HEIGHT = exports.SCREEN_WIDTH = void 0;
const gameData_1 = require("./shared/gameData");
const keys_1 = require("./shared/keys");
exports.SCREEN_WIDTH = window.innerWidth; //forTest: REMOVE EXPORT LATER
exports.SCREEN_HEIGHT = window.innerHeight; //forTest: REMOVE EXPORT LATER
exports.game_data = new gameData_1.GameData(0, exports.SCREEN_WIDTH, exports.SCREEN_HEIGHT / 2, //player
(exports.SCREEN_WIDTH / 2), (exports.SCREEN_HEIGHT / 2), { x: 3, y: 0 } //ball
);
window.addEventListener('load', mainFunc);
function mainFunc() {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    setInterval(gameLoop, 5);
}
function onKeyDown(e) {
    //87-w, 83-s, 38-arrowUp, 40-arrowDown
    if (e.keyCode === keys_1.Keys.UP_P1) {
        exports.game_data.player1.pressKey(keys_1.Keys.UP_P1);
    }
    if (e.keyCode == keys_1.Keys.DOWN_P1) {
        exports.game_data.player1.pressKey(keys_1.Keys.DOWN_P1);
    }
    if (e.keyCode === keys_1.Keys.UP_P2) {
        exports.game_data.player2.pressKey(keys_1.Keys.UP_P2);
    }
    if (e.keyCode == keys_1.Keys.DOWN_P2) {
        exports.game_data.player2.pressKey(keys_1.Keys.DOWN_P2);
    }
}
function onKeyUp(e) {
    if (e.keyCode === keys_1.Keys.UP_P1) {
        exports.game_data.player1.releaseKey(keys_1.Keys.UP_P1);
    }
    if (e.keyCode == keys_1.Keys.DOWN_P1) {
        exports.game_data.player1.releaseKey(keys_1.Keys.DOWN_P1);
    }
    if (e.keyCode === keys_1.Keys.UP_P2) {
        exports.game_data.player2.releaseKey(keys_1.Keys.UP_P2);
    }
    if (e.keyCode == keys_1.Keys.DOWN_P2) {
        exports.game_data.player2.releaseKey(keys_1.Keys.DOWN_P2);
    }
}
//TODO: move to another class?
function gameLoop() {
    exports.game_data.moveEntities(exports.SCREEN_WIDTH, exports.SCREEN_HEIGHT);
    updateElements();
}
//TODO: move later to another class?
function updateElements() {
    let p1_div = document.getElementById("p1");
    let p2_div = document.getElementById("p2");
    let ball_div = document.getElementById("ball");
    let p1_score = document.getElementById("p1Score");
    let p2_score = document.getElementById("p2Score");
    let p1_pos = exports.game_data.player1.getPos();
    let p2_pos = exports.game_data.player2.getPos();
    let ball_pos = exports.game_data.ball.getPos();
    p1_div.style.top = p1_pos.y + 'px';
    p2_div.style.top = p2_pos.y + 'px';
    ball_div.style.top = ball_pos.y + 'px';
    ball_div.style.left = ball_pos.x + 'px';
    p1_score.innerText = String(exports.game_data.player1.getPoints());
    p2_score.innerText = String(exports.game_data.player2.getPoints());
}
