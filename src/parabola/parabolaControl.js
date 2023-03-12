import addHole from "../utils/hole";
import parabola from "./parabolaCreation";
import player from "../game/player";
import { drawImage, ctx } from "../utils/canvas";
import { resetPoints, incresePoints, gameOverView } from "../game/gameViews";
import { ball } from "../utils/images";

export default () => {
  parabola.parabolaTopPoint = -5;
  const holePosition = document.querySelector(".hole").offsetLeft;

  if (parabola.y < 0) {
    cancelAnimationFrame(player.animationFlyingBall);
    resetPoints();
    gameOverView();
    parabola.resetVelocityAfterGameOverToInitState();
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
    parabola.resetVelocityAfterGameOverToInitState();
    player.ballIsFlyingNow = false;
  }
};
