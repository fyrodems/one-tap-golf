import shootingPath from "../path/pathCreation";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  shootingPath.updateFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (e.keyCode !== 32 || player.ballIsFlyingNow) return;
    let interval = setInterval(() => {
      console.log("%cinterval", "color: blue");
      drawPathAndFlightBall();
    }, 50);

    document.addEventListener(
      "mouseup",
      () => {
        console.log("%cclear interval", "color: red");
        clearInterval(interval);
        player.flyingBall();
      },
      { once: true }
    );
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
}

export default initEvents;
