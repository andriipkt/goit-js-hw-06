const decrementBtn = document.body.children[1].firstElementChild;
const incrementBtn = document.body.children[1].lastElementChild;
const value = decrementBtn.nextElementSibling;

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
