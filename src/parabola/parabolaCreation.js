import { drawImage, ctx, clearCanvasView } from "../utils/canvas";
import { ball, dot } from "../utils/images";
import { pointsCounterView } from "../game/gameViews";
import player from "../game/player";

class Parabola {
  constructor() {
    this.groundLevel = window.innerHeight - 225;
    this.speed = 5;
    this.a = 0.005;
    this.y = 0;
    this.x = 0;

    this.isMobileWidth = window.innerWidth < 700;
    this.ballPosition = this.isMobileWidth ? 100 : 300;
    this.parabolaCurve = this.isMobileWidth ? 100 : 300;
    this.parabolaFinalDistance = 200;
  }

  setInitialConditions() {
    this.b = 1;
    this.c = 1;
    this.parabolaCurve = this.isMobileWidth ? 100 : 300;
  }

  increaseDistance() {
    this.parabolaCurve += this.speed;
  }

  increaseSpeed() {
    this.speed += 1.5;
  }

  recalculateParabola() {
    this.calculateShotPath(this.parabolaFinalDistance);
    player.getBallFinalFlight();
  }

  resetSpeed() {
    this.speed = 5;
  }

  getFinalDistance() {
    this.parabolaFinalDistance = this.parabolaCurve;
  }

  calculateShotPath(x2) {
    this.b =
      (this.groundLevel -
        this.groundLevel -
        this.a * (this.ballPosition * this.ballPosition - x2 * x2)) /
      (this.ballPosition - x2);
    this.c =
      this.groundLevel -
      this.a * this.ballPosition * this.ballPosition -
      this.b * this.ballPosition;
    this.x = this.ballPosition;
    pointsCounterView();
  }

  calculateFlightPoints() {
    this.y = Math.round(this.a * this.x * this.x + this.b * this.x + this.c);
    this.x++;
  }

  drawFlightPath() {
    clearCanvasView();
    this.calculateShotPath(this.parabolaCurve);
    let pointX = this.ballPosition;
    while (pointX < this.parabolaCurve) {
      pointX++;
      this.x += 50;
      this.calculateFlightPoints();
      drawImage(ctx, dot, this.x, this.y);
    }
    drawImage(ctx, ball, this.ballPosition, this.groundLevel);
    this.increaseDistance();
  }
}

let parabola = new Parabola();
export default parabola;
