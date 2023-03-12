const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ctx1 = canvas.getContext("2d");

const createCanvas = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 168;
};

const clearCanvasView = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const drawImage = (context, image, valueX, valueY) => {
  context.drawImage(image, valueX, valueY);
};

export { ctx, ctx1, createCanvas, clearCanvasView, drawImage };
