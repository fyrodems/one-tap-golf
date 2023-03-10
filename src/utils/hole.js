const generateLeftPositionForHole =
  Math.floor(Math.random() * (700 - 250 + 1)) + 250;

const addHole = () => {
  const hole = document.querySelector(".hole");
  hole.style.left = generateLeftPositionForHole + "px";
};

export { generateLeftPositionForHole, addHole };
