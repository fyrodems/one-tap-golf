import parabola from "../parabola/parabolaCreation";
import checkParabolaCollision from "../parabola/parabolaCollisionControl";
import { clearCanvasView, drawImage, ctx } from "../utils/canvas";
import { ball } from "../utils/images";
import { pointsCounterView } from "./gameViews";

const Player = () => {
  const player = {
    animationFlyingBall: null,
    ballIsFlyingNow: false,
    setVelocityBallFlight: () => setVelocityBallFlight(),
    getBallFinalFlight: () => {
      getBallFinalFlight(player);
    },
    flyingBall: () => flyingBall(),
  };

  return player;
};

const player = Player();

const setVelocityBallFlight = () => {
  parabola.pointXOfParabola += 10;
  parabola.y += 10;
};

const getBallFinalFlight = (player) => {
  player.animationFlyingBall = requestAnimationFrame(() => {
    getBallFinalFlight(player);
  });

  setVelocityBallFlight();
  clearCanvasView();
  pointsCounterView();
  parabola.calculateFlightPoints();
  drawImage(ctx, ball, parabola.pointXOfParabola, parabola.y);
  player.ballIsFlyingNow = true;
  checkParabolaCollision();
};

const flyingBall = () => {
  parabola.getFinalDistance();
  parabola.setInitialConditions();
  parabola.recalculateParabola();
  parabola.increaseSpeed();
};

export default player;
