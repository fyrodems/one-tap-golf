import parabola from "./parabolaCreation";
import { drawImage, ctx } from "../utils/canvas";
import addHole from "../utils/hole";
import { ball } from "../utils/images";
import player from "../game/player";
import { resetPoints, incresePoints, gameOverView } from "../game/gameViews";

const endGame = () => {
  cancelAnimationFrame(player.animationFlyBall);
  resetPoints();
  gameOverView();
  parabola.resetSpeed();
  player.ballIsFlyingNow = false;
};

export default () => {
  const holePosition = document.querySelector(".hole").offsetLeft;

  if (parabola.y < 0) {
    endGame();
  }

  if (
    450 < parabola.y &&
    parabola.y < 720 &&
    parabola.x > holePosition - 30 &&
    parabola.x < holePosition + 80
  ) {
    cancelAnimationFrame(player.animationFlyBall);
    incresePoints();
    addHole();
    drawImage(ctx, ball, parabola.ballPosition, parabola.groundLevel);
    player.ballIsFlyingNow = false;
  }

  if (parabola.y > 720) {
    endGame();
  }
};
