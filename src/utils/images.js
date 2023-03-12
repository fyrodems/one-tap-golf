const loadImage = (path) => {
  const image = new Image();
  image.src = path;
  return image;
};

const ball = loadImage("./images/object_ball.png");
const dot = loadImage("./images/object_dot.png");

export { ball, dot };
