import { drawImage, ctx, clearCanvasView } from "./canvas";
// import playerBall from "./playerBall";
// import { ball } from "./playerBall";
import { pointsCounterView } from "./gameHandlers";

class Path {
  constructor() {
    this.a = 0.003;
    this.groundLevel = window.innerHeight - 225;
    this.pointXOfParabola = 0;
    this.startPosOfBall = 100;
    this.startDrawingRangeOfPath = 100;
    this.parabolaFinalDistance = 200;
    this.parabolaTopPoint = -5;
    this.vx = 3;
    this.b = 0;
    this.c = 0;
    this.y = 0;
  }

  setInitialConditions() {
    this.b = 1;
    this.c = 1;
    this.startDrawingRangeOfPath = 100;
  }

  setIncreasePathDistance() {
    this.startDrawingRangeOfPath += this.vx;
  }

  increaseSpeedOFDrawBallPathForNextFound() {
    this.vx += 1;
  }

  recalculateParabolaToFinalFlight() {
    this.calculateShotPath(this.parabolaFinalDistance);
    // playerBall.getBallFinalFlight();
  }

  resetVelocityAfterGameOverToInitState() {
    this.vx = 3;
  }

  getFinalDistancePath() {
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

  updateFlightPath() {
    this.parabolaTopPoint = this.b * this.b - 4 * this.a * this.c;
    clearCanvasView();
    this.calculateShotPath(this.startDrawingRangeOfPath);
    let i = this.startPosOfBall;
    while (i < this.startDrawingRangeOfPath) {
      i++;
      this.pointXOfParabola += 50;
      this.calculateFlightPoints();
      drawImage(ctx, dot, this.pointXOfParabola + 10, this.y + 10);
    }
    drawImage(ctx, ball, this.startPosOfBall, this.groundLevel);
    this.setIncreasePathDistance();
  }
}

let shootingPath = new Path();
export default shootingPath;
