const loadImage = (path) => {
  const image = new Image();
  image.src = path;
  return image;
};

const gameOverView = loadImage("./images/tile_sky_color01.png");
const ball = loadImage("/images/object_ball.png");
const dot = loadImage("/images/object_dot.png");

export { gameOverView, ball, dot };
