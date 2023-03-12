import parabola from "../parabola/parabolaCreation";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  parabola.drawFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (player.ballIsFlyingNow) return;
    const interval = setInterval(() => {
      drawPathAndFlightBall();
    }, 50);

    function handleMouseUp() {
      clearInterval(interval);
      player.flyingBall();
      document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  }

  document.addEventListener("mousedown", keyDownHandler);
}

export default initEvents;
