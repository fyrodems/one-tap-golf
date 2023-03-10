const generateLeftPositionForHole =
  Math.floor(Math.random() * (window.innerWidth - 500)) + 400;

const addHole = () => {
  const hole = document.querySelector(".hole");
  hole.style.left = generateLeftPositionForHole + "px";
};

export { generateLeftPositionForHole, addHole };
