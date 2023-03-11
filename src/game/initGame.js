import shootingPath from "../path/pathCreation";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  shootingPath.updateFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (player.ballIsFlyingNow) return;
    const interval = setInterval(() => {
      console.log("%cinterval", "color: blue");
      drawPathAndFlightBall();
    }, 50);

    function handleMouseUp() {
      console.log("%cclear interval", "color: red");
      clearInterval(interval);
      player.flyingBall();
      document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  }

  document.addEventListener("mousedown", keyDownHandler);
}

export default initEvents;
