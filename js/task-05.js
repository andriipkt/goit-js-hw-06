const nameInput = document.body.children[1];
const nameOutput = nameInput.nextElementSibling.firstElementChild;

// nameInput.addEventListener("input", () => {
//   const name = nameInput.value;

//   nameOutput.textContent = name === "" ? "Anonymous" : name;
// });

nameInput.addEventListener("input", () => {
  if (nameInput.value !== "") {
    return (nameOutput.textContent = nameInput.value);
  }
});
