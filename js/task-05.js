const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");



inputName.addEventListener("input", (event) => {
      if (inputName.value.length === 0) {
        outputName.textContent = "Anonymous";
      } else {
            outputName.textContent = event.currentTarget.value;
  }
   
});

// !event.currentTarget.placeholdershow === true                               