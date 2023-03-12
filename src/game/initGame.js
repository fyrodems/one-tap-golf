import parabola from "../parabola/parabolaCreation";
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
    }, 50);

    const handleMouseUp = () => {
      clearInterval(interval);
      player.flyingBall();
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  document.addEventListener("mousedown", keyDownHandler);
};

export default initEvents;
