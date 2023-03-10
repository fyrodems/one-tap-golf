import { clearCanvasView } from "./canvas";
import { ctx, ctx1 } from "./canvas";

const actualScore = 0;
// let loadedWindow = false;

function increaseActualScore() {
  clearCanvasView();
  actualScore += 1;
  pointsCounterView();
}

function pointsCounterView() {
  ctx.font = "bolder 80px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText(actualScore, 780, 100);
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
pressButtonToStart();

export { increaseActualScore, resetPoints, gameOverView, pointsCounterView };
