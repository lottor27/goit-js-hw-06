const inputRange = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

textSize.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener("input", (event) => {
  textSize.style.fontSize = `${inputRange.value}px`;
});
