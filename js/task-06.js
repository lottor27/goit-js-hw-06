const inputField = document.querySelector('#validation-input')





inputField.addEventListener("blur", (event) => {

  if (inputField.value.length == "6") {
    inputField.classList.add("invalid");
  }else {
      
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
});



