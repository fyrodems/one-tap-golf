import "../scss/main.scss";
import addHole from "./utils/hole";
import { ball } from "./utils/images";
import { createCanvas, drawImage, ctx } from "./utils/canvas";
import shootingPath from "./path/pathCreation";
import { pressButtonToStart, gameOverView } from "./game/gameViews";
import initEvents from "./game/initGame";

addHole();
createCanvas();
pressButtonToStart();

setTimeout(() => {
  drawImage(ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
  initEvents();
}, 500);
