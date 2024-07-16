document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["form"];
  const nombre = form["nombre"];
  const email = form["email"];
  const asunto = form["asunto"];
  const mensaje = form["mensaje"];
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    let errorMessages = [];

    if (nombre.value.trim() === "") {
      valid = false;
      errorMessages.push("Por favor, ingresa tu nombre.");
    }

    if (email.value.trim() === "") {
      valid = false;
      errorMessages.push("Por favor, ingresa tu email.");
    } else if (!validateEmail(email.value)) {
      valid = false;
      errorMessages.push("Por favor, ingresa un email válido.");
    }

    if (asunto.value.trim() === "") {
      valid = false;
      errorMessages.push("Por favor, ingresa el asunto.");
    }

    if (mensaje.value.trim() === "") {
      valid = false;
      errorMessages.push("Por favor, ingresa tu mensaje.");
    }

    if (valid) {
      form.submit();
    } else {
      alert(errorMessages.join("\n"));
    }
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }
});
