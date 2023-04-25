const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

const emptyInput = { value: "Anonymous" };

inputName.addEventListener("input", (event) => {
  
      outputName.textContent = event.currentTarget.value;
    //   console.log(outputName);
        console.log(event.placeholder);
  
 
});

// !event.currentTarget.placeholdershow === true                               