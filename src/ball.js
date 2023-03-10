import shootingPath from "./shotingPath";
import utilities from "./utilities";
import interfaceView from "./interfaceView";
// import golfHole from "./golfHole";
import gameControler from "./gameControler";

function setVelocityBallFlight(player) {
  shootingPath.pointXOfParabola += player.velocityBall;
  shootingPath.y += player.velocityBall;
}

function getBallFinalFlight(player) {
  player.animationFlyingBall = requestAnimationFrame(function () {
    getBallFinalFlight(player);
  });

  //set ball velocity
  setVelocityBallFlight(player);

  utilities.clearCanvasView();
  interfaceView.pointsCounterView();
  shootingPath.calculateFlightPoints();
  utilities.drawImage(
    utilities.ctx,
    ball,
    shootingPath.pointXOfParabola,
    shootingPath.y
  );
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
window.onload = function () {
  utilities.drawImage(
    utilities.ctx,
    ball,
    shootingPath.startPosOfBall,
    shootingPath.groundLevel
  );
};

export default playerBall;
