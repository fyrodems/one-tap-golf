import "../scss/main.scss";
import addHole from "./utils/hole";
import { ball } from "./utils/images";
import { createCanvas, drawImage, ctx } from "./utils/canvas";
import { pressButtonToStart } from "./game/gameViews";
import initEvents from "./game/initGame";
import parabola from "./parabola/parabolaCreation";

addHole();
createCanvas();
pressButtonToStart();

setTimeout(() => {
  drawImage(ctx, ball, parabola.startPosOfBall, parabola.groundLevel);
  initEvents();
}, 500);
