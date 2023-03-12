import parabola from "../parabola/parabolaCreation";
import { gameOverView } from "./gameViews";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  parabola.drawFlightPath();
};

const initEvents = () => {
  const keyDownHandler = () => {
    if (player.ballIsFlyingNow) return;
    const interval = setInterval(() => {
      drawPathAndFlightBall();
      if (parabola.y > 7697000) {
        clearInterval(interval);
        player.flyBall();
        gameOverView();
        document.removeEventListener("mouseup", handleMouseUp);
      }
    }, 50);

    const handleMouseUp = () => {
      clearInterval(interval);
      player.flyBall();
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  document.addEventListener("mousedown", keyDownHandler);
};

export default initEvents;
