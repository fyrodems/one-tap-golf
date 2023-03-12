import parabola from "./parabolaCreation";
import { drawImage, ctx } from "../utils/canvas";
import addHole from "../utils/hole";
import { ball } from "../utils/images";
import player from "../game/player";
import { resetPoints, incresePoints, gameOverView } from "../game/gameViews";

export default () => {
  parabola.parabolaTopPoint = -5;
  const holePosition = document.querySelector(".hole").offsetLeft;

  if (parabola.y < 0) {
    cancelAnimationFrame(player.animationFlyingBall);
    resetPoints();
    gameOverView();
    parabola.resetVelocity();
    player.ballIsFlyingNow = false;
  }

  if (
    450 < parabola.y &&
    parabola.y < 720 &&
    parabola.pointXOfParabola > holePosition - 30 &&
    parabola.pointXOfParabola < holePosition + 80
  ) {
    cancelAnimationFrame(player.animationFlyingBall);
    incresePoints();
    addHole();
    drawImage(ctx, ball, parabola.startPosOfBall, parabola.groundLevel);
    player.ballIsFlyingNow = false;
  }

  if (parabola.y > 720) {
    cancelAnimationFrame(player.animationFlyingBall);
    resetPoints();
    gameOverView();
    parabola.resetVelocity();
    player.ballIsFlyingNow = false;
  }
};
