import { clearCanvasView } from "../utils/canvas";
import { ctx, ctx1 } from "../utils/canvas";

let actualScore = 0;

function increaseActualScore() {
  clearCanvasView();
  actualScore += 1;
  pointsCounterView();
}

function pointsCounterView() {
  ctx.font = "bolder 80px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText(actualScore, window.innerWidth - 100, 100);
}

function resetPoints() {
  clearCanvasView();
  actualScore = 0;
  pointsCounterView();
}

function pressButtonToStart() {
  ctx1.font = "bolder 40px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("press Space to start", 250, 250);
}

function addGameOverText() {
  ctx1.font = "bolder 100px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("GAME OVER", 120, 200);
}

function gameOverView() {
  addGameOverText();
  pressButtonToStart();
}

pointsCounterView();
// pressButtonToStart();

export {
  increaseActualScore,
  resetPoints,
  gameOverView,
  pointsCounterView,
  pressButtonToStart,
};
