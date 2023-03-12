import parabola from "../parabola/parabolaCreation";
import checkParabolaCollision from "../parabola/parabolaCollisionControl";
import { clearCanvasView, drawImage, ctx } from "../utils/canvas";
import { ball } from "../utils/images";
import { pointsCounterView } from "./gameViews";

const Player = () => {
  const player = {
    animationFlyingBall: null,
    ballIsFlyingNow: false,
    setVelocityBallFlight: () => {
      setVelocityBallFlight(player);
    },
    getBallFinalFlight: () => {
      getBallFinalFlight(player);
    },
    flyingBall: () => {
      flyingBall();
    },
  };

  return player;
};

const setVelocityBallFlight = () => {
  parabola.pointXOfParabola += 10;
  parabola.y += 10;
};

const getBallFinalFlight = (player) => {
  player.animationFlyingBall = requestAnimationFrame(() => {
    getBallFinalFlight(player);
  });

  setVelocityBallFlight(player);
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

const player = Player();

export default player;
