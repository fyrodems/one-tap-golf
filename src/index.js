import "../scss/main.scss";
import addHole from "./utils/hole";
import { ball } from "./utils/images";
import { createCanvas, drawImage, ctx } from "./canvas";
import shootingPath from "./shoot";
// import { pressButtonToStart } from "./gameHandlers";

addHole();
createCanvas();
// pressButtonToStart();
// drawImage();

setTimeout(() => {
  drawImage(ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
}, 500);
