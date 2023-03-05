export default () => {
  const hole = document.querySelector(".hole");
  let leftPosition = Math.floor(Math.random() * (700 - 250 + 1)) + 250;
  hole.style.left = leftPosition + "px";
};
