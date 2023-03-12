import parabola from "../parabola/parabolaCreation";
import pathControl from "../parabola/parabolaControl";
import { clearCanvasView, drawImage, ctx } from "../utils/canvas";
import { ball } from "../utils/images";
import { pointsCounterView } from "./gameViews";

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

function setVelocityBallFlight(player) {
  parabola.pointXOfParabola += player.velocityBall;
  parabola.y += player.velocityBall;
}

function getBallFinalFlight(player) {
  player.animationFlyingBall = requestAnimationFrame(function () {
    getBallFinalFlight(player);
  });

  setVelocityBallFlight(player);
  clearCanvasView();
  pointsCounterView();
  parabola.calculateFlightPoints();
  drawImage(ctx, ball, parabola.pointXOfParabola, parabola.y);
  player.ballIsFlyingNow = true;
  pathControl();
}

function flyingBall() {
  //get distance to draw final path
  parabola.getFinalDistancePath();

  //set default values after drawing final path to final ball animation
  parabola.setInitialConditions();

  //calculating and ball flight animation
  parabola.recalculateParabolaToFinalFlight();

  //increasing speed of draw ball path
  parabola.increaseSpeedOFDrawBallPathForNextFound();
}

const player = Player();

export default player;
