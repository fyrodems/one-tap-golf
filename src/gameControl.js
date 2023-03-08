import shootingPath from "./shotingPath";
import golfHole from "./golfHole";
import interfaceView from "./interfaceView";
import playerBall, { ball } from "./playerBall";
import utilities from "./utilities";

class GameController {
  constructor() {}
  controlGameStep() {
    //reset top parabola
    shootingPath.parabolaTopPoint = -5;

    // check collision with hole else game over
    if (
      shootingPath.y > 470 &&
      shootingPath.y < 500 &&
      shootingPath.pointXOfParabola > golfHole.newHerizontalValueForHole - 30 &&
      shootingPath.pointXOfParabola < golfHole.newHerizontalValueForHole + 80
    ) {
      cancelAnimationFrame(playerBall.animationFlyingBall);

      interfaceView.increaseActualScore();
      golfHole.addGolfHole();
      utilities.drawImage(
        utilities.ctx,
        ball,
        shootingPath.startPosOfBall,
        shootingPath.groundLevel
      );
      playerBall.ballIsFlyingNow = false;
    }

    if (shootingPath.y > 500 && shootingPath.y < 550) {
      cancelAnimationFrame(playerBall.animationFlyingBall);
      interfaceView.resetPoints();
      interfaceView.gameOverView();
      shootingPath.resetVelocityAfterGameOverToInitState();
      playerBall.ballIsFlyingNow = false;
    }
  }
}

let gameController = new GameController();

export default gameController;
