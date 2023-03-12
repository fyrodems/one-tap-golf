import { drawImage, ctx, clearCanvasView } from "../utils/canvas";
import { ball, dot } from "../utils/images";
import { pointsCounterView } from "../game/gameViews";
import player from "../game/player";
import { isMobileWidth } from "../utils/usefulThings";

class Parabola {
  constructor() {
    this.groundLevel = window.innerHeight - 225;
    this.parabolaTopPoint = -5;
    this.speed = 3;
    this.a = 0.005;
    this.b = 0;
    this.c = 0;
    this.y = 0;

    this.startPosOfBall = isMobileWidth ? 100 : 300;
    this.startDrawingRangeOfPath = isMobileWidth ? 100 : 300;
    this.parabolaFinalDistance = 200;
    this.pointXOfParabola = 0;
  }

  setInitialConditions() {
    this.b = 1;
    this.c = 1;
    this.startDrawingRangeOfPath = isMobileWidth ? 100 : 300;
  }

  setIncreasePathDistance() {
    this.startDrawingRangeOfPath += this.speed;
  }

  increaseSpeed() {
    this.speed += 1;
  }

  recalculateParabola() {
    this.calculateShotPath(this.parabolaFinalDistance);
    player.getBallFinalFlight();
  }

  resetVelocity() {
    this.speed = 3;
  }

  getFinalDistance() {
    this.parabolaFinalDistance = this.startDrawingRangeOfPath;
  }

  calculateShotPath(x2) {
    this.b =
      (this.groundLevel -
        this.groundLevel -
        this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) /
      (this.startPosOfBall - x2);
    this.c =
      this.groundLevel -
      this.a * this.startPosOfBall * this.startPosOfBall -
      this.b * this.startPosOfBall;
    this.pointXOfParabola = this.startPosOfBall;
    pointsCounterView();
  }

  calculateFlightPoints() {
    this.y = Math.round(
      this.a * this.pointXOfParabola * this.pointXOfParabola +
        this.b * this.pointXOfParabola +
        this.c
    );
    this.pointXOfParabola++;
  }

  drawFlightPath() {
    clearCanvasView();
    this.calculateShotPath(this.startDrawingRangeOfPath);
    let pointX = this.startPosOfBall;
    while (pointX < this.startDrawingRangeOfPath) {
      pointX++;
      this.pointXOfParabola += 50;
      this.calculateFlightPoints();
      drawImage(ctx, dot, this.pointXOfParabola + 10, this.y + 10);
    }
    drawImage(ctx, ball, this.startPosOfBall, this.groundLevel);
    this.setIncreasePathDistance();
  }
}

let parabola = new Parabola();
export default parabola;
