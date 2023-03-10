import shootingPath from "./shotingPath";
import playerBall from "./playerBall";
import gameController from "./gameControler";

class InitEvents {
  init() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
        shootingPath.updateFlightPath();
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 32 && !playerBall.ballIsFlyingNow) {
        playerBall.flyingBall();
      }
    });
  }
}
const initEvents = new InitEvents();
initEvents.init();

export default initEvents;
