import shootingPath from "./path";
import playerBall from "./ball";

const drawPath = () => {
  if (playerBall.ballIsFlyingNow) return;
  shootingPath.updateFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (!e.keyCode === 32) return;
    document.addEventListener("mousedown", () => {
      setInterval(() => {
        shootingPath.updateFlightPath();
      }, 300);
    });
    document.addEventListener("mouseup", () => {
      playerBall.flyingBall();
    });
    //   if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
    //     shootingPath.updateFlightPath();
    //   }
    // }

    // function keyUpHandler(e) {
    //   if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
    //     playerBall.flyingBall();
    //   }
  }

  document.addEventListener("keydown", keyDownHandler);
  // document.addEventListener("keyup", keyUpHandler);
}

export default initEvents;
