const btnChangeColor = document.querySelector('.change-color')
const bodyColor = document.querySelector("body")
const colorText = document.querySelector(".color");




btnChangeColor.addEventListener("click", function () {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
