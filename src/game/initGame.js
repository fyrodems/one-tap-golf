import shootingPath from "../path/pathCreation";
import player from "./player";

const drawPathAndFlightBall = () => {
  if (player.ballIsFlyingNow) return;
  shootingPath.updateFlightPath();
};

function initEvents() {
  function keyDownHandler(e) {
    if (!e.keyCode === 32 && player.ballIsFlyingNow) return;
    document.addEventListener("mousedown", () => {
      const interwal = setInterval(() => {
        console.log("%cinterwal", "color: blue");
        drawPathAndFlightBall();

        document.addEventListener("mouseup", () => {
          console.log("%cclear interwal", "color: red");

          clearInterval(interwal);
        });
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
}

export default initEvents;
