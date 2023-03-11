import addHole from "../utils/hole";
import shootingPath from "./pathCreation";
import player from "../game/player";
import { drawImage, ctx } from "../utils/canvas";
import {
  resetPoints,
  increaseActualScore,
  gameOverView,
} from "../game/gameViews";
import { ball } from "../utils/images";

export default () => {
  shootingPath.parabolaTopPoint = -5;
  const holePosition = document.querySelector(".hole").offsetLeft;
  console.log(shootingPath.y);

  if (shootingPath.y < 0) {
    cancelAnimationFrame(player.animationFlyingBall);
    resetPoints();
    gameOverView();
    shootingPath.resetVelocityAfterGameOverToInitState();
    player.ballIsFlyingNow = false;
  }

  // check collision with hole else game over
  if (
    450 < shootingPath.y &&
    shootingPath.y < 720 &&
    shootingPath.pointXOfParabola > holePosition - 30 &&
    shootingPath.pointXOfParabola < holePosition + 80
  ) {
    cancelAnimationFrame(player.animationFlyingBall);

    increaseActualScore();
    addHole();
    drawImage(ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
    player.ballIsFlyingNow = false;
  }

  if (!(450 < shootingPath.y && shootingPath.y < 720)) {
    cancelAnimationFrame(player.animationFlyingBall);
    resetPoints();
    gameOverView();
    shootingPath.resetVelocityAfterGameOverToInitState();
    player.ballIsFlyingNow = false;
  }
};
