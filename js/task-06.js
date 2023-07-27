// const input = document.getElementById("validation-input");

// input.addEventListener("blur", handleInputBlur);

// function handleInputBlur(event) {
//   const inputValue = event.target.value;
//   const requiredLength = event.target.dataset.length;

//   if (inputValue.length === Number(requiredLength)) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// }

const validationInput = document.body.children[1];

validationInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  const dataLength = event.target.dataset.length;

  if (inputValue.length === Number(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
