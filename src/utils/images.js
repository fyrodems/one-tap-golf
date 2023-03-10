const loadImage = (path) => {
  const image = new Image();
  image.src = path;
  return image;
};

const gameOverView = loadImage("./images/tile_sky_color01.png");
const ball = loadImage("/images/object_ball.png");
const dot = loadImage("/images/object_dot.png");
const grass = loadImage("/images/tile_ground01.png");

export { gameOverView, ball, dot, grass };
