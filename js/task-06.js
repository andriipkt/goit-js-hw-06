const input = document.getElementById("validation-input");

input.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  const inputValue = event.target.value;
  const requiredLength = event.target.dataset.length;

  if (inputValue.length === Number(requiredLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
