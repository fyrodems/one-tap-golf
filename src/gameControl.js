import shootingPath from "./shotingPath";
import playerBall, { ball } from "./playerBall";
import { drawImage, ctx } from "./canvas";
import { resetPoints, increaseActualScore, gameOverView } from "./gameHandlers";
import { increaseActualScore } from "./gameHandlers";
import addHole from "./utils/hole";

export default () => {
  shootingPath.parabolaTopPoint = -5;
  const holePosition = document.querySelector(".hole").offsetLeft;

  // check collision with hole else game over
  if (
    shootingPath.y > 470 &&
    shootingPath.y < 500 &&
    shootingPath.pointXOfParabola > holePosition - 30 &&
    shootingPath.pointXOfParabola < holePosition + 80
  ) {
    cancelAnimationFrame(playerBall.animationFlyingBall);

    increaseActualScore();
    addHole();
    drawImage(ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
    playerBall.ballIsFlyingNow = false;
  }

  if (shootingPath.y > 500 && shootingPath.y < 550) {
    cancelAnimationFrame(playerBall.animationFlyingBall);
    resetPoints();
    gameOverView();
    shootingPath.resetVelocityAfterGameOverToInitState();
    playerBall.ballIsFlyingNow = false;
  }
};
