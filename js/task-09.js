function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.body.children[1].lastElementChild;
const colorValueSpan = changeColorBtn.previousElementSibling.firstElementChild;

changeColorBtn.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValueSpan.textContent = randomColor;
}
