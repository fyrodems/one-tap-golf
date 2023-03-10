import shootingPath from "./shotingPath";
import interfaceView from "./interfaceView";
import gameControler from "./gameControler";
import { clearCanvasView, drawImage, ctx } from "./canvas";
import { ball } from "./utils/images";

function setVelocityBallFlight(player) {
  shootingPath.pointXOfParabola += player.velocityBall;
  shootingPath.y += player.velocityBall;
}

function getBallFinalFlight(player) {
  player.animationFlyingBall = requestAnimationFrame(function () {
    getBallFinalFlight(player);
  });

  setVelocityBallFlight(player);
  clearCanvasView();
  interfaceView.pointsCounterView();
  shootingPath.calculateFlightPoints();
  drawImage(ctx, ball, shootingPath.pointXOfParabola, shootingPath.y);
  player.ballIsFlyingNow = true;
  gameControler.controlGameStep();
}

function flyingBall() {
  //get distance to draw final path
  shootingPath.getFinalDistancePath();

  //set default values after drawing final path to final ball animation
  shootingPath.setInitialConditions();

  //calculating and ball flight animation
  shootingPath.recalculateParabolaToFinalFlight();

  //increasing speed of draw ball path
  shootingPath.increaseSpeedOFDrawBallPathForNextFound();
}

function Player() {
  const player = {
    velocityBall: 10,
    animationFlyingBall: null,
    ballIsFlyingNow: false,
    setVelocityBallFlight: function () {
      setVelocityBallFlight(player);
    },
    getBallFinalFlight: function () {
      getBallFinalFlight(player);
    },
    flyingBall: function () {
      flyingBall();
    },
  };

  return player;
}

const playerBall = Player();

export default playerBall;
