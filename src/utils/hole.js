export default () => {
  const hole = document.querySelector(".hole");
  const generateLeftPositionForHole =
    Math.floor(Math.random() * (window.innerWidth - 500)) + 400;
  hole.style.left = generateLeftPositionForHole + "px";
};
