import shootingPath from "./path";
import playerBall from "./ball";
// import gameController from "./gameControler";

function initEvents() {
  function keyDownHandler(e) {
    if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
      shootingPath.updateFlightPath();
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
      playerBall.flyingBall();
    }
  }

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);
}

export default initEvents;
