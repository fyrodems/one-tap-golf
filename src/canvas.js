const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// const ctx1 = canvas.getContext("2d");

function createCanvas() {
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  //canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 168;
  console.log("create canvas");
}

function clearCanvasView() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawImage(context, image, valueX, valueY) {
  context.drawImage(image, valueX, valueY, image.width, image.height);
}

createCanvas();

export { createCanvas, clearCanvasView, drawImage };
