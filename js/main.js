document.addEventListener("DOMContentLoaded", function() {

    let checkPassword = function(str)
    {
      let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return re.test(str);
    };

    let passwordValidation = function(e)
    {
      if(this.pass_1.value != "" && this.pass_1.value == this.pass_2.value) {
        if(!checkPassword(this.pass_1.value)) {
          alert("La contraseña ingresada no tiene el formato correcto");
          this.pass_1.focus();
          e.preventDefault();
          return;
        }
      } else {
        alert("Error: Por favor volvé a confirmar la contraseña");
        this.pass_1.focus();
        e.preventDefault();
        return;
      }
    };

    let myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", passwordValidation, true);
  }, false);
