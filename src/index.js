import "../scss/main.scss";
import addHole from "./utils/hole";
import { ball } from "./utils/images";
import { createCanvas, drawImage, ctx } from "./canvas";
import shootingPath from "./path";
// import { pressButtonToStart } from "./gameHandlers";
import initEvents from "./initGame";

addHole();
createCanvas();
// pressButtonToStart();
// drawImage();

setTimeout(() => {
  drawImage(ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
  initEvents();
}, 500);
