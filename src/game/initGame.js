import shootingPath from "../path/pathCreation";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  shootingPath.updateFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (!e.keyCode === 32) return;
    document.addEventListener("mousedown", () => {
      setInterval(() => {
        drawPathAndFlightBall();
      }, 50);
    });
    document.addEventListener("mouseup", () => {
      player.flyingBall();
    });
    //   if (e.keyCode === 32 && !player.ballIsFlyingNow) {
    //     shootingPath.updateFlightPath();
    //   }
    // }

    // function keyUpHandler(e) {
    //   if (e.keyCode === 32 && !player.ballIsFlyingNow) {
    //     player.flyingBall();
    //   }
  }

  document.addEventListener("keydown", keyDownHandler);
  // document.addEventListener("keyup", keyUpHandler);
}

export default initEvents;
