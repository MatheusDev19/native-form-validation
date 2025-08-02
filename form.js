const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const isUsernameValid = validateField(username, "O nome de usuário é obrigatório.");
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isConfirmationValid = validateConfirmation(password, passwordConfirmation);

  const isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmationValid;

  if (isFormValid) {
    alert("O formulário está 100% válido!");
  }
}

function validateField(input, errorMessage) {
  if (input.value.trim() === "") {
    setError(input, errorMessage);
    return false;
  } else {
    setSuccess(input);
    return true;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.trim() === "") {
    setError(input, "O email é obrigatório.");
    return false;
  } else if (!emailRegex.test(input.value)) {
    setError(input, "Insira um email válido.");
    return false;
  } else {
    setSuccess(input);
    return true;
  }
}

function validatePassword(input) {
  if (input.value.trim() === "") {
    setError(input, "A senha é obrigatória.");
    return false;
  } else if (input.value.length < 7) {
    setError(input, "A senha precisa ter no mínimo 7 caracteres.");
    return false;
  } else {
    setSuccess(input);
    return true;
  }
}

function validateConfirmation(password, confirmation) {
  if (confirmation.value.trim() === "") {
    setError(confirmation, "A confirmação de senha é obrigatória.");
    return false;
  } else if (confirmation.value !== password.value) {
    setError(confirmation, "As senhas não conferem.");
    return false;
  } else {
    setSuccess(confirmation);
    return true;
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
