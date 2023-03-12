import parabola from "../parabola/parabolaCreation";

export default () => {
  const hole = document.querySelector(".hole");
  const generateLeftPositionForHole =
    Math.floor(
      Math.random() * (window.innerWidth - parabola.isMobileWidth ? 500 : 1200)
    ) + 400;
  hole.style.left = generateLeftPositionForHole + "px";
};
