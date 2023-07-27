const form = document.body.children[1];

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    form.reset();
  }
}
