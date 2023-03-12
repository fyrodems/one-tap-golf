import parabola from "../parabola/parabolaCreation";
import checkParabolaCollision from "../parabola/parabolaCollision";
import { clearCanvasView, drawImage, ctx } from "../utils/canvas";
import { ball } from "../utils/images";
import { pointsCounterView } from "./gameViews";

const Player = () => {
  const player = {
    animationFlyBall: null,
    ballIsFlyingNow: false,
    setVelocityBallFlight: () => setVelocityBallFlight(),
    getBallFinalFlight: () => {
      getBallFinalFlight(player);
    },
    flyBall: () => flyBall(),
  };

  return player;
};

const player = Player();

const setVelocityBallFlight = () => {
  parabola.x += 10;
  parabola.y += 10;
};

const getBallFinalFlight = () => {
  player.animationFlyBall = requestAnimationFrame(getBallFinalFlight);

  setVelocityBallFlight();
  clearCanvasView();
  pointsCounterView();
  parabola.calculateFlightPoints();
  drawImage(ctx, ball, parabola.x, parabola.y);
  player.ballIsFlyingNow = true;
  checkParabolaCollision();
};

const flyBall = () => {
  parabola.getFinalDistance();
  parabola.setInitialConditions();
  parabola.recalculateParabola();
  parabola.increaseSpeed();
};

export default player;
