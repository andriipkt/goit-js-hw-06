const controlInput = document.body.children[1].firstElementChild;
const createBtn = controlInput.nextElementSibling;
const destroyBtn = createBtn.nextElementSibling;
const boxesContainer = document.body.children[2];

createBtn.addEventListener("click", () => {
  const amount = controlInput.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  initialDimension = 30;
  controlInput.value = "";
});

let initialDimension = 30;
//
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxElement = document.createElement("div");
    boxElement.style.width = `${initialDimension}px`;
    boxElement.style.height = `${initialDimension}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    boxesContainer.insertAdjacentElement("beforeend", boxElement);

    initialDimension += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
