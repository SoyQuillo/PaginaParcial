document.addEventListener("DOMContentLoaded", function() {
    let val_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let info = "";
    let validar = false;
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const espacioinfo = document.getElementById("espacioinfo");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      if (name.value.length < 3) {
        info += "Nombre muy corto\n";
        validar = true;
      }
  
      if (password.value.length < 8) {
        info += "Contraseña muy corta\n";
        validar = true;
      }
  
      if (!val_email.test(email.value)) {
        info += "Email inválido\n";
        validar = true;
      }
  
      if (validar) {
        espacioinfo.innerText = info;
        espacioinfo.style.color = "red";
      } else {
        espacioinfo.innerText = "Enviado con éxito";
        espacioinfo.style.color = "green";
      }
    });
  });
  