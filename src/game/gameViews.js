import { clearCanvasView } from "../utils/canvas";
import { ctx, ctx1 } from "../utils/canvas";

let actualScore = 0;

const incresePoints = () => {
  clearCanvasView();
  actualScore += 1;
  pointsCounterView();
};

const pointsCounterView = () => {
  ctx.font = "bolder 80px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText(actualScore, ctx.canvas.width - 100, 100);
};

const resetPoints = () => {
  clearCanvasView();
  actualScore = 0;
  pointsCounterView();
};

const pressButtonToStart = () => {
  ctx1.font = "bolder 40px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("", ctx.canvas.width / 2 - 230, 250);
  ctx.fillText(
    "To play, press and hold down your mouse button,",
    ctx.canvas.width / 2 - 490,
    300
  );
  ctx.fillText(
    "then release it to launch the ball.",
    ctx.canvas.width / 2 - 330,
    350
  );
};

const addGameOverText = () => {
  ctx1.font = "bolder 100px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("GAME OVER", ctx.canvas.width / 2 - 340, 200);
};

const gameOverView = () => {
  addGameOverText();
  pressButtonToStart();
};

export {
  incresePoints,
  resetPoints,
  gameOverView,
  pointsCounterView,
  pressButtonToStart,
};
